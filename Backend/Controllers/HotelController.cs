
using Microsoft.AspNetCore.Mvc;
using Npgsql;
using Dapper;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class HotelController : ControllerBase
    {
        private IConfiguration Configuration;

        public HotelController(IConfiguration _configuration)
        {
            Configuration = _configuration;
        }

        [HttpGet("hotels")]
        public IActionResult GetHotel(string query)
        {
            string connString = this.Configuration.GetConnectionString("DefaultConnection");
            using var connection = new NpgsqlConnection(connString);
            
            /*
                add query to fetch geocode from db based on zip from selected golf course
            */
            
            return Ok();
        }
    }
}