using System;

namespace Crouton.Models
{
    public interface IApplicant
    {
        string address { get; set; }
        DateTime appliedDate { get; set; }
        string city { get; set; }
        string email { get; set; }
        string firstName { get; set; }
        string id { get; set; }
        string lastName { get; set; }
        byte phone { get; set; }
        bool save { get; set; }
        string state { get; set; }
    }
}