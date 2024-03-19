using System;

namespace Contracts
{
    public static class LG
    {
        public static void WriteLine(object args)
        {
            Console.BackgroundColor = ConsoleColor.Yellow;
            Console.ForegroundColor = ConsoleColor.DarkRed;
            Console.WriteLine(args);
            Console.ResetColor();
        }
    }
}