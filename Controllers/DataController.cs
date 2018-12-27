using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace CoreTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<List<User>> Get()
        {
            List<User> users = new List<User>() {
                new User{
                    Id = 1,
                    Name = "First User"
                },
                new User{
                    Id = 2,
                    Name = "Second User"
                },
                new User{
                    Id = 3,
                    Name = "Third User"
                }
            };


            return Ok(users);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return $"value{id}";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }

    public class User
    {
        public int Id { get; set; }

        public string Name { get; set; }
    }
}
