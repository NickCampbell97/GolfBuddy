
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
    }
}