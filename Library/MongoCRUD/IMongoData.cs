﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MongoCRUD
{
    public interface IMongoData
    {
        public Guid id { get; set; }
    }
}
