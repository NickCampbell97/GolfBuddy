using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DataController : ControllerBase
    {
        [HttpGet("getData")]
        public IActionResult GetData()
        {
            var data = new
            {
                message = "Hello from ASP.NET Core!",
                timestamp = DateTime.Now
            };

            return Ok(data);
        }
    }
}