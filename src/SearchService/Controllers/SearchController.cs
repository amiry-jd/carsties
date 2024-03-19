using Microsoft.AspNetCore.Mvc;
using MongoDB.Entities;

namespace SearchService;

[ApiController]
[Route("api/search")]
public class SearchController : ControllerBase
{

    [HttpGet]
    public async Task<ActionResult<List<Item>>> SearchItems([FromQuery] SearchParams searchParams)
    {
        var query = DB.PagedSearch<Item, Item>();

        if (!string.IsNullOrWhiteSpace(searchParams.SearchTerm))
        {
            query.Match(Search.Full, searchParams.SearchTerm).SortByTextScore();
        }

        query = searchParams.OrderBy switch
        {
            "make" => query.Sort(q => q.Ascending(t => t.Make)),
            "new" => query.Sort(q => q.Descending(t => t.CreatedAt)),
            _ => query.Sort(q => q.Ascending(t => t.AuctionEnd)),
        };

        query = searchParams.FilterBy switch
        {
            "finished" => query.Match(t => t.AuctionEnd < DateTime.UtcNow),
            "endingSoon" => query.Match(t => t.AuctionEnd < DateTime.UtcNow.AddHours(6)
                && t.AuctionEnd > DateTime.UtcNow),
            _ => query.Match(t => t.AuctionEnd > DateTime.UtcNow)
        };

        if (!string.IsNullOrWhiteSpace(searchParams.Seller))
        {
            query.Match(t => t.Seller == searchParams.Seller);
        }

        if (!string.IsNullOrWhiteSpace(searchParams.Winner))
        {
            query.Match(t => t.Winner == searchParams.Winner);
        }

        query.PageNumber(searchParams.PageNumber);
        query.PageSize(searchParams.PageSize);

        var result = await query.ExecuteAsync();

        return Ok(new
        {
            results = result.Results,
            pageCount = result.PageCount,
            totalCount = result.TotalCount,
        });
    }

}