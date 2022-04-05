using System;
namespace Crouton.Models
{
    public interface IPerson
    {
        string address { get; set; }
        string firstName { get; set; }
        string id { get; set; }
        string lastName { get; set; }
        string phone { get; set; }
        string email { get; set; }
        string state { get; set; }
        string city { get; set; }
        Job position { get; set; }

    }
}