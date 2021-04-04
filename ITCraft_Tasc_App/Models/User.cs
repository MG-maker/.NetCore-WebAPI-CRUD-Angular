using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ITCraft_Tasc_App.Models
{
    public class User
    {
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        
        [Required]
        [MaxLength(500)]
        public string Name { get; set; }
        
        [DefaultValue(false)]
        public bool Active { get; set; }
    }
}
