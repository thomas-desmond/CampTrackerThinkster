using Microsoft.EntityFrameworkCore;

namespace CampTracker.Models
{
    public class CampContext : DbContext
    {
        public CampContext (DbContextOptions<CampContext> options)
            : base(options)
        {
        }

        public DbSet<Camp> Camp { get; set; }
    }
}
