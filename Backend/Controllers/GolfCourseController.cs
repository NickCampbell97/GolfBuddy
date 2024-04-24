using Microsoft.AspNetCore.Mvc;
using Npgsql;
using Dapper;
using Microsoft.Extensions.Configuration;

namespace Backend.Controllers
{


    [ApiController]
    [Route("[controller]")]
    public class GolfCourseController : ControllerBase {
        //private readonly string _connectionString = "Host=/var/run/postgresql;Port=5432;Database=nick;Username=nick;Password=SweetPotato99!";
        
        private IConfiguration Configuration;

        public GolfCourseController(IConfiguration _configuration)
        {
            Configuration = _configuration;
        }

        [HttpGet("autocomplete")]
        public IActionResult Autocomplete(string query) {
            
            string connString = this.Configuration.GetConnectionString("DefaultConnection");

            using var connection = new NpgsqlConnection(connString);

            var sql = @"SELECT c_info FROM courses WHERE c_name ILIKE '%' || @Query || '%' LIMIT 10";

            var suggestions = connection.Query<string>(sql, new { Query = query });

            /*
            Console.WriteLine($"SQL Query: {sql}");
            Console.WriteLine($"Query Parameter: {query}");
            Console.WriteLine($"Suggestions Count: {suggestions.Count()}");
            */
            return Ok(suggestions);
        }
    }
}