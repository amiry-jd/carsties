using Contracts;
using MassTransit;

namespace AuctionService;

public class AuctionCreatedFaultConsumer : IConsumer<Fault<AuctionCreated>>
{
    public async Task Consume(ConsumeContext<Fault<AuctionCreated>> context)
    {
        LG.WriteLine("--> Consuming faulty creation");

        var exception = context.Message.Exceptions.First();

        if (exception.ExceptionType == typeof(ArgumentException).FullName)
        {
            context.Message.Message.Model = "FooBar";
            await context.Publish(context.Message.Message);
        }
        else
        {
            LG.WriteLine("Not an argument exception - update error dashboard somewhere");
        }
    }
}
