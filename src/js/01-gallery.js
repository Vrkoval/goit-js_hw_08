
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryElem=document.querySelector(".gallery");
function createGalleryItem(items) {
    return items
        .map(({preview,original,description})=>{
            return `<div class="gallery__item">
                        <a class="gallery__link" href="#">
                            <img class="gallery__image"
                            src="${preview}"
                            data-original="${original}"
                            alt="${description}">
                        </a>
                    </div>`;
        })
        .join("");
    }
        const addGalleryItem = createGalleryItem(galleryItems);
        galleryElem.insertAdjacentHTML("beforeend", addGalleryItem);
        
        galleryElem.addEventListener("click", onImageClick);
        
        function onImageClick(e) {
          blockDefaultSettings(e);
        
          checkImageClass(e);
        
          const instance =
            basicLightbox.create(`<img src="${e.target.dataset.original}" 
          alt="${e.target.alt}" width="800" height="600">`);
          instance.show();
          galleryElem.addEventListener("keydown", (e) => {
            if (e.code === "Escape") {
              instance.close();
            }
          });
        }
        
        const blockDefaultSettings = (e) => {
          e.preventDefault();
        };
        const checkImageClass = (e) => {
          if (!e.target.classList.contains("gallery__image")) {
            return;
          }
        };
console.log(galleryItems);
