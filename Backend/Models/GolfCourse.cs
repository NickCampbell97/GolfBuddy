
namespace Backend.Models
{
    public class GolfCourse {
        public int Id { get; set; }

        public string Name { get; set; } = null!;

        public string Street { get; set; } = null!;

        public string City { get; set; } = null!;

        public string State { get; set; } = null!;

        public string ZipCode { get; set; } = null!;

        public string PhoneNumber { get; set; } = null!;

    }
}
