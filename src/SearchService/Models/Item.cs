using MongoDB.Entities;

namespace SearchService;

public class Item : Entity
{
    public DateTimeOffset CreatedAt { get; set; }
    public DateTimeOffset UpdatedAt { get; set; }
    public DateTimeOffset AuctionEnd { get; set; }
    public string Seller { get; set; }
    public string Winner { get; set; }
    public string Make { get; set; }
    public string Model { get; set; }
    public int Year { get; set; }
    public string Color { get; set; }
    public int Mileage { get; set; }
    public string ImageUrl { get; set; }
    public string Status { get; set; }
    public int ReservePrice { get; set; }
    public int? SoldAmount { get; set; }
    public int? CurrentHighBid { get; set; }
}

public class AuctionCreated
{
    public Guid Id { get; set; }
    public DateTimeOffset CreatedAt { get; set; }
    public DateTimeOffset UpdatedAt { get; set; }
    public DateTimeOffset AuctionEnd { get; set; }
    public string Seller { get; set; }
    public string Winner { get; set; }
    public string Make { get; set; }
    public string Model { get; set; }
    public int Year { get; set; }
    public string Color { get; set; }
    public int Mileage { get; set; }
    public string ImageUrl { get; set; }
    public string Status { get; set; }
    public int ReservePrice { get; set; }
    public int? SoldAmount { get; set; }
    public int? CurrentHighBid { get; set; }
}
public class AuctionUpdated
{
    public string Make { get; set; }
    public string Model { get; set; }
    public string Color { get; set; }
    public int Mileage { get; set; }
    public int Year { get; set; }
}
public class AuctionDeleted
{
    public string Id { get; set; }
}
public class AuctionFinished
{
    public bool ItemSold { get; set; }
    public string AuctionId { get; set; }
    public string Winner { get; set; }
    public string Seller { get; set; }
    public int? Amount { get; set; }
}
public class BidPlaced
{
    public string Id { get; set; }
    public string AuctionId { get; set; }
    public string Bidder { get; set; }
    public DateTimeOffset BidTime { get; set; }
    public int Amount { get; set; }
    public string BidStatus { get; set; }
}