using Microsoft.AspNetCore.Mvc;
using Npgsql;
using Dapper;
using Microsoft.Extensions.Configuration;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GolfCourseController : ControllerBase 
    {
        
        private IConfiguration Configuration;

        public GolfCourseController(IConfiguration _configuration)
        {
            Configuration = _configuration;
        }

        [HttpGet("autocomplete")]
        public IActionResult Autocomplete(string query) 
        {

#pragma warning disable CS8600
            string connString = this.Configuration.GetConnectionString("DefaultConnection");
#pragma warning restore CS8600

            using var connection = new NpgsqlConnection(connString);

            var sql = @"SELECT c_info FROM courses WHERE c_name ILIKE @Query || '%' LIMIT 10";

            var suggestions = connection.Query<string>(sql, new { Query = query });
            
            return Ok(suggestions);
        }
    }
}