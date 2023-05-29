<script setup lang="ts">
import { ShareIcon16, ChartIcon16, ChatIcon12 } from 'ui-layer/assets/icons';

defineOptions({
  name: 'ProductSection'
});
</script>

<template>
  <section class="section product-section">
    <div class="product-section__top hidden-lg-and-down">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="product-section__title-block d-flex align-items-center">
              <h1
                class="product-section__title color_text-primary subtitle2-mobile subtitle2-tablet_md subtitle2-desktop_lg me-auto"
              >
                Диван-кровать NRAVA Hit 2180х870х940
              </h1>
              <div class="product-section__top-controls flex-shrink-0">
                <el-button text :icon="ShareIcon16">Поделиться</el-button>
                <el-button text :icon="ChartIcon16"
                  >Добавить к сравнению</el-button
                >
              </div>
            </div>
            <div
              class="product-section__top-subsections d-flex align-items-center"
            >
              <div
                href="/"
                class="product-section__vendor-code product-section__top-subsections-item color_text-tertiary text-s order-md-1"
              >
                Артикул:&nbsp;<span class="color_text-secondary"
                  >110538091</span
                >
              </div>
              <a
                href="/"
                class="product-section__top-rating product-section__top-subsections-item d-flex align-items-center color_text-secondary text-s"
              >
                <UiRating :model-value="4" disabled />&nbsp;24 отзыва
              </a>
              <a
                href="/"
                class="product-section__top-questions product-section__top-subsections-item d-flex align-items-center color_text-secondary text-s"
              >
                <el-icon class="color_text-tertiary"><ChatIcon12 /></el-icon
                >&nbsp;12 вопросов
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product-section__main">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-7 col-xxl-5">
            <div class="product-section__gallery">
              <ProductGallery />
            </div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed sequi
            esse officia vitae sit. Error dicta neque eum asperiores repellat
            ullam accusamus incidunt cum natus, adipisci architecto? Autem
            quibusdam itaque fugiat quaerat aperiam repellendus quas
            reprehenderit, reiciendis beatae id dolor delectus fugit,
            dignissimos alias, doloribus error debitis! Totam reiciendis in non
            dolore ut quos, laborum veniam. Reprehenderit molestiae ea eaque
            quasi ipsum velit, saepe error sit eligendi sed est accusantium esse
            veritatis harum officia neque a eveniet deserunt. Illum sed aut eius
            eligendi nobis, velit eveniet nulla magni dolor vel labore
            reprehenderit consectetur molestias quibusdam cupiditate incidunt
            alias iure quaerat earum temporibus hic. Iure eveniet quod maxime
            reprehenderit ratione nemo placeat repudiandae hic atque laudantium
            possimus sint, totam distinctio quae quidem natus doloribus aliquam
            accusantium explicabo eum. Laborum repellendus, eaque, eum nam
            consequatur dolor ipsa esse commodi dolore enim ducimus est hic
            veritatis. Nesciunt, aspernatur! Sequi cumque magnam eveniet eum
            animi sapiente repellendus distinctio in quibusdam sint rerum,
            similique sunt voluptas voluptates id error, aspernatur enim iusto!
            Obcaecati similique quod voluptates aliquid consequatur numquam
            harum. Provident aperiam voluptas quam porro minus rerum sit
            consequuntur placeat! Magni, reiciendis. Recusandae quis maxime
            accusantium libero temporibus esse consectetur blanditiis corporis
            qui animi beatae quo dolorem dicta quisquam cum, aut repudiandae?
            Aspernatur voluptas necessitatibus excepturi amet quibusdam earum
            maiores eius ad voluptate, modi saepe. Tenetur, aperiam? Assumenda
            reprehenderit consectetur magni expedita? Soluta eveniet ab
            provident, dolorem nemo nihil cupiditate ipsam magni ut aliquid
            nobis reprehenderit rerum doloremque ipsa explicabo iure quisquam
            vero autem et! Qui corrupti asperiores non natus recusandae adipisci
            maiores ipsa repellat praesentium officia voluptates, incidunt sit
            dolorem blanditiis distinctio! At totam reiciendis molestiae tenetur
            eligendi culpa velit iste voluptatibus explicabo eos, ex commodi
            omnis in nisi neque esse, nemo repellendus tempore veritatis quo,
            minima ipsam sit animi. Asperiores neque, commodi facilis illo
            cumque similique illum eius atque laborum facere quam earum! Aliquid
            fuga optio neque, corporis temporibus ratione error, odio, officia
            voluptatem maxime autem culpa impedit soluta. Sit possimus inventore
            aperiam numquam, officia sed temporibus amet perspiciatis enim
            soluta beatae quasi nesciunt tempore iusto impedit ut dicta optio
            esse corrupti. Illum quidem eaque alias obcaecati accusamus. Cumque
            amet voluptas culpa omnis reiciendis. Aut unde id itaque libero
            optio quia qui perspiciatis autem aliquid numquam placeat vel,
            blanditiis nesciunt non dignissimos, sunt mollitia ratione. Nulla,
            dolore voluptate. Quas quisquam est voluptas magnam totam fugit
            neque saepe voluptatibus voluptate nemo, ab laborum nesciunt libero
            animi eum quos velit nobis blanditiis aut, officia magni. Est, odit!
            Aut debitis libero quos perferendis dolorem id omnis eius ipsum.
            Expedita aliquam quam magni ratione, ipsa ullam ea vero. Iure vel
            eum, harum nobis debitis eveniet et, corporis nulla, excepturi quis
            perferendis delectus perspiciatis dicta laborum totam saepe
            praesentium esse ipsam fugiat numquam consequuntur. Fugit iure vitae
            ipsum distinctio a doloribus soluta voluptatum sequi aliquam vel
            quisquam earum possimus nostrum fugiat dolores laudantium repellat
            corporis perspiciatis nulla vero hic totam, eos maxime. Deserunt
            dolorum labore aliquam neque, nam voluptate aliquid recusandae ut
            atque itaque dolor omnis libero provident eligendi temporibus
            laborum earum dolore sed? Corrupti provident sed ipsa tempora eaque,
            dicta corporis, possimus enim pariatur consequatur explicabo, error
            blanditiis unde tenetur natus excepturi suscipit nesciunt iusto
            maiores temporibus laborum ducimus qui dolorum? Doloremque ea amet
            facere sunt iste rerum voluptatum velit atque eligendi, ut eos vel.
            Iusto temporibus eum quis voluptatem dolorum officiis dolorem nihil
            totam sunt dignissimos laboriosam culpa accusamus enim, atque, ab
            reprehenderit natus tenetur, aliquam a dolore placeat quisquam quae
            aspernatur! Similique eum tenetur eveniet magnam earum doloremque
            qui quidem voluptatem omnis sed deleniti sunt iste dicta ratione
            laborum, perspiciatis animi ea voluptatum ullam molestiae dolores
            dignissimos! Dolorem, velit quaerat magnam sapiente beatae ex
            voluptatibus sint vitae ad soluta earum, odio fugit quia excepturi
            eum ducimus repudiandae nisi, nulla dignissimos. Vero voluptatem
            sequi, sunt architecto mollitia corporis magni laboriosam doloribus,
            nesciunt consectetur saepe accusamus, repellat unde nam id
            necessitatibus repudiandae molestiae qui maiores dicta esse
            corrupti. Assumenda pariatur velit magni atque sed laboriosam
            eveniet repudiandae ad, beatae molestiae ab quaerat quia alias
            placeat nisi ipsa at possimus quas nam sunt deleniti dignissimos
            provident ex! Est, excepturi quis. Voluptatum ipsa cumque
            repudiandae sed modi eius laborum expedita quas placeat pariatur,
            numquam aspernatur culpa aliquid dolorem eum earum voluptatem quae
            qui! Veritatis placeat accusamus veniam labore tempora velit quis
            similique quisquam! Cum ea molestiae hic perferendis aut eaque
            impedit ad quidem dolorem excepturi autem quis tempora provident
            asperiores pariatur sint id tenetur, laudantium veritatis quisquam!
            Id ullam maiores harum omnis, commodi nemo sequi laboriosam. In
            dignissimos, deserunt animi dolor esse ipsum repudiandae fugiat
            quaerat inventore vero cupiditate asperiores sunt labore voluptatem
            nobis aut voluptatibus? Animi ex quod est quisquam fuga cupiditate
            sequi, laudantium corrupti possimus impedit? Libero, assumenda?
            Explicabo inventore atque, vel aspernatur libero consectetur, aut
            itaque rerum similique tempora ab accusamus et harum corrupti.
            Suscipit ratione amet at porro dolor esse assumenda quaerat nemo
            repellat accusamus in eum harum tempore, doloribus corporis ipsa
            quae reprehenderit? Perspiciatis iure alias, temporibus assumenda
            voluptate rem fugiat labore minima accusamus ex illo, dolores a
            officia ipsa incidunt inventore laborum impedit voluptatum quam
            quae. Suscipit fugiat placeat laboriosam tempora architecto ullam
            perferendis sequi ad iste! Libero vitae deserunt placeat, labore,
            rem minima mollitia recusandae impedit quisquam iure a alias magni
            cumque illo, quo blanditiis non. Dicta, tenetur beatae. Quisquam
            eligendi exercitationem delectus perspiciatis vero nesciunt dolores
            voluptas earum, fuga quidem ut neque! Eius ad eos tempore asperiores
            tempora tenetur recusandae repellendus quaerat, deleniti repellat
            distinctio placeat assumenda impedit mollitia quam animi facere
            quibusdam eum dicta. Nostrum corporis ad quia itaque in ipsam fuga,
            rerum impedit mollitia illo et similique debitis rem aliquam sit
            facilis ut est quisquam provident cupiditate atque expedita natus
            libero recusandae? Ipsa fugiat, amet sequi repudiandae, rerum fuga
            quod ad harum facilis ipsum quos nostrum. Cumque consectetur quam
            odio? Quis labore eum libero officia vel deserunt veritatis eaque
            repudiandae neque in temporibus cupiditate, hic molestias error
            magnam necessitatibus dicta nesciunt. Excepturi id fuga optio
            incidunt tempora. Itaque corporis qui incidunt id temporibus.
            Delectus excepturi facere nihil dolorem reiciendis.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.product-section {
  &__title-block {
    margin-bottom: var(--space-4);
  }
  &__top-controls {
    margin-left: var(--space-4);
    .el-button {
      --el-button-text-color: var(--icons-color);
      --el-button-font-weight: var(--text-m-medium__font-weight);
      font-size: var(--text-m-medium__font-size);
      line-height: var(--text-m-medium__line-height);
      padding: 0;
      + .el-button {
        margin-left: var(--space-7);
      }
    }
  }
  &__top-subsections-item {
    text-decoration: none;
    margin-right: var(--space-7);
    @include media-breakpoint-up(lg) {
      margin-right: 28px;
    }
  }
}
</style>
