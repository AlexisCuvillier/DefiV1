using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if(context.Persons.Any()) return;

            var persons = new List<Person>
            {
                new Person
                {
                    Name = "Alexis",
                    LastName = "Cuvillier",
                    Mail = "alexis.cuvillier@protonmail.com"
                },
                 new Person
                {
                    Name = "Toto",
                    LastName = "Tata",
                    Mail = "toto@protonmail.com"
                },
                 new Person
                {
                    Name = "TiTi",
                    LastName = "Lili",
                    Mail = "tili@protonmail.com"
                },
                 new Person
                {
                    Name = "Andy",
                    LastName = "Cape",
                    Mail = "andycape@protonmail.com"
                },
                 new Person
                {
                    Name = "Martin",
                    LastName = "Matin",
                    Mail = "martin@protonmail.com"
                }, new Person
                {
                    Name = "Dora",
                    LastName = "Exploratrice",
                    Mail = "sac_a_dos@protonmail.com"
                }, new Person
                {
                    Name = "Eren",
                    LastName = "Jager",
                    Mail = "eren@protonmail.com"
                }, new Person
                {
                    Name = "JaiPlus",
                    LastName = "Dinspiration",
                    Mail = "fin@protonmail.com"
                },
            };

            await context.Persons.AddRangeAsync(persons);
            await context.SaveChangesAsync();

        }
    }
}