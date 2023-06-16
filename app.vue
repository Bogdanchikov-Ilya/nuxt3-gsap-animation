<template>



  <div>
    <div class="first" ref="first">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, culpa! Tempore sit fuga ducimus aut! Temporibus fugit incidunt eveniet adipisci dolore impedit officia animi unde reprehenderit. Quae, esse ratione? Suscipit quasi quod magnam error facilis. Cum, blanditiis possimus dignissimos laborum reprehenderit voluptas, architecto, nihil exercitationem at repellendus distinctio quo tempore voluptatibus fuga commodi molestias dolorem ratione quas natus et quaerat. Magni ea quibusdam voluptate a iure neque qui soluta labore similique reiciendis? Qui est natus nisi, amet vero veniam assumenda dolorem earum sint et quidem doloremque temporibus ipsa corporis facilis totam dignissimos rerum molestias commodi cumque laboriosam magnam nobis iusto.
      </p>
      <img src="@/src/asseets/img/user.png" alt="" class="topImg" ref="topImg">
    </div>
    <div class="second">
      <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, culpa! Tempore sit fuga ducimus aut! Temporibus fugit incidunt eveniet adipisci dolore impedit officia animi unde reprehenderit. Quae, esse ratione? Suscipit quasi quod magnam error facilis. Cum, blanditiis possimus dignissimos laborum reprehenderit voluptas, architecto, nihil exercitationem at repellendus distinctio quo tempore voluptatibus fuga commodi molestias dolorem ratione quas natus et quaerat. Magni ea quibusdam voluptate a iure neque qui soluta labore similique reiciendis? Qui est natus nisi, amet vero veniam assumenda dolorem earum sint et quidem doloremque temporibus ipsa corporis facilis totam dignissimos rerum molestias commodi cumque laboriosam magnam nobis iusto.
    </p>
    <img src="@/src/asseets/img/user.png" alt="">
  </div>
    <div class="three">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, culpa! Tempore sit fuga ducimus aut! Temporibus fugit incidunt eveniet adipisci dolore impedit officia animi unde reprehenderit. Quae, esse ratione? Suscipit quasi quod magnam error facilis. Cum, blanditiis possimus dignissimos laborum reprehenderit voluptas, architecto, nihil exercitationem at repellendus distinctio quo tempore voluptatibus fuga commodi molestias dolorem ratione quas natus et quaerat. Magni ea quibusdam voluptate a iure neque qui soluta labore similique reiciendis? Qui est natus nisi, amet vero veniam assumenda dolorem earum sint et quidem doloremque temporibus ipsa corporis facilis totam dignissimos rerum molestias commodi cumque laboriosam magnam nobis iusto.
      </p>
      <img src="@/src/asseets/img/user.png" alt="">
    </div>
    <div class="prefinish">
      <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, culpa! Tempore sit fuga ducimus aut! Temporibus fugit incidunt eveniet adipisci dolore impedit officia animi unde reprehenderit. Quae, esse ratione? Suscipit quasi quod magnam error facilis. Cum, blanditiis possimus dignissimos laborum reprehenderit voluptas, architecto, nihil exercitationem at repellendus distinctio quo tempore voluptatibus fuga commodi molestias dolorem ratione quas natus et quaerat. Magni ea quibusdam voluptate a iure neque qui soluta labore similique reiciendis? Qui est natus nisi, amet vero veniam assumenda dolorem earum sint et quidem doloremque temporibus ipsa corporis facilis totam dignissimos rerum molestias commodi cumque laboriosam magnam nobis iusto.
    </p>
    <img src="@/src/asseets/img/user.png" alt="">
    </div>
    <div class="finish" ref="finish">
      <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, culpa! Tempore sit fuga ducimus aut! Temporibus fugit incidunt eveniet adipisci dolore impedit officia animi unde reprehenderit. Quae, esse ratione? Suscipit quasi quod magnam error facilis. Cum, blanditiis possimus dignissimos laborum reprehenderit voluptas, architecto, nihil exercitationem at repellendus distinctio quo tempore voluptatibus fuga commodi molestias dolorem ratione quas natus et quaerat. Magni ea quibusdam voluptate a iure neque qui soluta labore similique reiciendis? Qui est natus nisi, amet vero veniam assumenda dolorem earum sint et quidem doloremque temporibus ipsa corporis facilis totam dignissimos rerum molestias commodi cumque laboriosam magnam nobis iusto.
    </p>
    <img src="@/src/asseets/img/user.png" alt=""> 
    </div>
  </div>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus cumque, impedit iusto quae quam officiis excepturi magnam nemo provident velit, perferendis minus eaque quisquam assumenda suscipit voluptatibus dolores aperiam earum. Dolore quos cumque voluptate eaque quo labore eius ab dolores libero. Sequi explicabo unde ratione quod ullam fugiat eaque repudiandae, voluptate inventore cupiditate vel, repellat possimus adipisci recusandae odit, eius labore? Eaque cupiditate nesciunt dolorum in esse dicta, est perspiciatis atque quidem adipisci animi sequi corrupti a suscipit ea, commodi illo ab inventore. Nobis fugit dolore expedita tempora, ipsum iste rerum modi tempore beatae cum, hic eaque molestias dignissimos voluptas corporis, facere autem. Praesentium, quidem! Nobis deleniti eaque magni voluptas impedit obcaecati, architecto dolorum nam suscipit molestiae totam iure numquam. Labore ipsa voluptatem numquam? Mollitia nemo, perspiciatis non quisquam culpa eaque optio sunt? Vero nobis iure necessitatibus pariatur dicta architecto aut animi nulla, quae consectetur error odit, autem enim quos voluptatibus alias. Voluptatum excepturi nam laboriosam dicta sint saepe atque sunt, tenetur quis nulla ipsa, eius temporibus. Numquam natus error earum tempore, iste blanditiis quam harum perspiciatis sed. Quo eum exercitationem alias tempore corporis, vel ullam laboriosam deleniti provident ipsa voluptatum harum culpa, modi at qui natus expedita minima.</p>

</template>
<script>
import { mapState, mapActions, mapStores } from 'pinia'
import {useCounterStore} from "~/stores/counter";
export default {
  computed: {
    // note we are not passing an array, just one store after the other
    // each store will be accessible as its id + 'Store'
    ...mapStores(useCounterStore)
  },
  methods: {
    test() {
      console.log(this.counterStore)
      console.log(this.counterStore.mainCount);
    },
    boxRotation() {
      // const gsap = this.$gsap
      // gsap.to('.box', { rotation: 27, x: 100, duration: 1 })
    }
  },
  mounted() {
    // console.log(this.$gsap)
    this.boxRotation()

    this.$gsap.to('.first', {
      scrollTrigger: {
        trigger: '.first',
        start: 'top top',
        scrub: true,
      },
      css: {
        background: 'red'
      }
    })

    this.$gsap.to('.topImg', {
      scrollTrigger: {
        trigger: '.topImg',
        start: '-200 0',
        scrub: true,
      },
      yPercent: -50
    })
    this.$gsap.to('.three', {
      scrollTrigger: {
        trigger: '.three',
        start: 'top top',
        scrub: true,
      },
      xPercent: -90
    })
    this.$gsap.from('.finish', {
      scrollTrigger: {
        trigger: '.prefinish',
        start: '-300 0',
        scrub: true,
      },
      y: 400,
      autoAlpha: 0,
      scrub: true,
      duration: 1
    })
  },
}
</script>
<style>
.three{
  background: gray;
}
</style>