using System;

namespace Contracts;

public class BidPlaced1
{
    public string Id { get; set; }
    public string AuctionId { get; set; }
    public string Bidder { get; set; }
    public DateTime BidTime { get; set; }
    public int Amount { get; set; }
    public string BidStatus { get; set; }
}


public class BidPlaced2
{
    public string Id { get; set; }
    public string Make { get; set; }
    public string Model { get; set; }
    public string Color { get; set; }
    public int Mileage { get; set; }
    public int Year { get; set; }
}