using System;
namespace Crouton.Models
{
    public interface IPerson
    {
        string address { get; set; }
        string firstName { get; set; }
        Guid id { get; set; }
        string lastName { get; set; }
        byte phone { get; set; }
        string email { get; set; }
        string state { get; set; }
        string city { get; set; }
        
    }
}