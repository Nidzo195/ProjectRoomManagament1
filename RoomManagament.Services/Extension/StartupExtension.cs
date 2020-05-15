using Microsoft.Extensions.DependencyInjection;
using RoomManagament.Services.Services;
using RoomManagament.Services.Services.Interface;
using System;
using System.Collections.Generic;
using System.Text;

namespace RoomManagament.Services.Extension
{
    public static class StartupExtension
    {
        public static IServiceCollection AddServiceExtension(this IServiceCollection services)
        {
            services
                .AddScoped<IRoomService, RoomService>();

            return services;
        }
    }
}
