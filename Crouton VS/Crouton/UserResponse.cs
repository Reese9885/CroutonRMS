using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB;
using MongoCRUD;
using Crouton.Models;
public class UserResponse
{
    public UserResponse(Employee user)
    {
        Success = true;
        User = user;
        AuthToken = user.client.AuthToken;
    }

    public UserResponse(bool success, string message)
    {
        Success = success;
        if (success) SuccessMessage = message;
        else ErrorMessage = message;
    }

    public bool Success { get; set; }
    public string SuccessMessage { get; set; }
    public string ErrorMessage { get; set; }

    //[JsonProperty("auth_token")]
    public string AuthToken { get; set; }

    //[JsonProperty("info")]
    public Employee User { get; set; }
}