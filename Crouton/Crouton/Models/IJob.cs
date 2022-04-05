namespace Crouton.Models
{
    public interface IJob
    {
        string id { get; set; }
        string startWage { get; set; }
        string title { get; set; }
    }
}