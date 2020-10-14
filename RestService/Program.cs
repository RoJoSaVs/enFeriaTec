using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System.Net;




namespace RestService{
    public class Program{
        public static void Main(string[] args){
            CreateHostBuilder(args).Build().Run();
            // var response = new WebClient().DownloadString("https://hdmovie720.com/blogsindexing.html");
            // Console.WriteLine(response);
        }


        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}