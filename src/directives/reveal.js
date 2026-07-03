// Directive v-reveal: menambahkan class 'reveal' lalu 'is-visible'
// saat elemen masuk ke viewport. Dipakai di berbagai section.
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15 }
)

export default {
  mounted(el) {
    el.classList.add('reveal')
    observer.observe(el)
  },
}
