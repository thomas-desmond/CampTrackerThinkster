using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CampTracker.Models;

namespace CampTracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CampsController : ControllerBase
    {
        private readonly CampContext _context;

        public CampsController(CampContext context)
        {
            _context = context;
        }

        // GET: api/Camps
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Camp>>> GetCamp()
        {
            return await _context.Camp.ToListAsync();
        }

        // GET: api/Camps/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Camp>> GetCamp(int id)
        {
            var camp = await _context.Camp.FindAsync(id);

            if (camp == null)
            {
                return NotFound();
            }

            return camp;
        }

        // PUT: api/Camps/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCamp(int id, Camp camp)
        {
            if (id != camp.Id)
            {
                return BadRequest();
            }

            _context.Entry(camp).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CampExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Camps
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Camp>> PostCamp(Camp camp)
        {
            _context.Camp.Add(camp);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCamp", new { id = camp.Id }, camp);
        }

        // DELETE: api/Camps/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Camp>> DeleteCamp(int id)
        {
            var camp = await _context.Camp.FindAsync(id);
            if (camp == null)
            {
                return NotFound();
            }

            _context.Camp.Remove(camp);
            await _context.SaveChangesAsync();

            return camp;
        }

        private bool CampExists(int id)
        {
            return _context.Camp.Any(e => e.Id == id);
        }
    }
}
