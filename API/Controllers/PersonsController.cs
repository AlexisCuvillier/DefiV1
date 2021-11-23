using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class PersonsController : BaseApiController
    {
        private readonly DataContext _context;

        public PersonsController(DataContext context)
        {
            this._context = context;
        }

        [HttpGet]

        public async Task<ActionResult<List<Person>>> GetPersons()
        {
            return await _context.Persons.ToListAsync();
        }

        [HttpGet("{id}")] //persons/id

        public async Task<ActionResult<Person>> GetPersons(Guid id)
        {
            return await _context.Persons.FindAsync(id);
        }

        
        // public async Task<ActionResult<List<Person>>> GetPersons(string name)
        // {
        //  var  person = await _context.Persons.Where(x => x.Name.Contains(name)).ToListAsync();
        //  return person;
        // }

    }
}