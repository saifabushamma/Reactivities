using Application.Photos;
using Microsoft.AspNetCore.Http;

namespace Application.Interfaces
{
    public interface IPhotoAccessor
    {
         PhotoUpLoadResult AddPhoto(IFormFile file);
         string DeletePhoto(string publicId);
    }
}