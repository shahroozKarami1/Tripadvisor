import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CardSearchPage from "../../components/CompSearchPage/CardSearchPage";
import LinkSide from "../../components/CompSearchPage/LinkSide";
import { useMedia } from "../../context/MediaQueryContext";
import SearchTitle from "../../components/CompSearchPage/SearchTitle";
import ForumsSearchCard from "../../components/CompSearchPage/ForumsSearchCard";
const SearchPage = () => {
  let isXs = useMedia();
  return (
    <Box bgcolor={"#F2F2F2"}>
      <Container>
        <Grid container spacing={4} marginY={"1rem"}>
          <Grid size={{ md: 9, xs: 12 }}>
            {isXs && <LinkSide />}
            <SearchTitle
              isAddPlaceBtn={true}
              text="نتایج برتر"
              isSeeAllBtn={false}
            />
            <CardSearchPage
              country="ایالات متحده / آمریکای شمالی"
              disc="کلرادو کمتر از بیست و شش پیست اسکی مانند ویل و برکنریج را در خود جای داده است. سایر فعالیت های زمستانی شامل اسنوبورد، سورتمه سواری، سورتمه سواری، پیاده روی برف و برف سواری است. این ایالت مملو از پارک‌های ملی، مراتع و جنگل‌هایی است که در هوای گرم‌تر می‌توانید از پیاده‌روی، دوچرخه‌سواری در کوهستان یا صخره‌نوردی لذت ببرید."
              link="/"
              title="جنگل های کلرادو"
              coverImg="/public/images/Tourism/Slider/img3.jpg"
            />
            <SearchTitle
              isAddPlaceBtn={false}
              text="نتایج بیشتر"
              isSeeAllBtn={false}
            />

            <CardSearchPage
              country="ایالات متحده / آمریکای شمالی"
              disc="کلرادو کمتر از بیست و شش پیست اسکی مانند ویل و برکنریج را در خود جای داده است. سایر فعالیت های زمستانی شامل اسنوبورد، سورتمه سواری، سورتمه سواری، پیاده روی برف و برف سواری است. این ایالت مملو از پارک‌های ملی، مراتع و جنگل‌هایی است که در هوای گرم‌تر می‌توانید از پیاده‌روی، دوچرخه‌سواری در کوهستان یا صخره‌نوردی لذت ببرید."
              link="/"
              title="جنگل های کلرادو"
              coverImg="/public/images/Tourism/Slider/img4.jpg"
            />
            <CardSearchPage
              country="ایالات متحده / آمریکای شمالی"
              disc="کلرادو کمتر از بیست و شش پیست اسکی مانند ویل و برکنریج را در خود جای داده است. سایر فعالیت های زمستانی شامل اسنوبورد، سورتمه سواری، سورتمه سواری، پیاده روی برف و برف سواری است. این ایالت مملو از پارک‌های ملی، مراتع و جنگل‌هایی است که در هوای گرم‌تر می‌توانید از پیاده‌روی، دوچرخه‌سواری در کوهستان یا صخره‌نوردی لذت ببرید."
              link="/"
              title="جنگل های کلرادو"
              coverImg="/public/images/Tourism/Slider/img3.jpg"
            />
            <CardSearchPage
              country="ایالات متحده / آمریکای شمالی"
              disc="کلرادو کمتر از بیست و شش پیست اسکی مانند ویل و برکنریج را در خود جای داده است. سایر فعالیت های زمستانی شامل اسنوبورد، سورتمه سواری، سورتمه سواری، پیاده روی برف و برف سواری است. این ایالت مملو از پارک‌های ملی، مراتع و جنگل‌هایی است که در هوای گرم‌تر می‌توانید از پیاده‌روی، دوچرخه‌سواری در کوهستان یا صخره‌نوردی لذت ببرید."
              link="/"
              title="جنگل های کلرادو"
              coverImg="/public/images/Tourism/Slider/img5.jpg"
            />
            <CardSearchPage
              country="ایالات متحده / آمریکای شمالی"
              disc="کلرادو کمتر از بیست و شش پیست اسکی مانند ویل و برکنریج را در خود جای داده است. سایر فعالیت های زمستانی شامل اسنوبورد، سورتمه سواری، سورتمه سواری، پیاده روی برف و برف سواری است. این ایالت مملو از پارک‌های ملی، مراتع و جنگل‌هایی است که در هوای گرم‌تر می‌توانید از پیاده‌روی، دوچرخه‌سواری در کوهستان یا صخره‌نوردی لذت ببرید."
              link="/"
              title="جنگل های کلرادو"
              coverImg="/public/images/Tourism/Slider/img6.jpg"
            />
            <CardSearchPage
              country="ایالات متحده / آمریکای شمالی"
              disc="کلرادو کمتر از بیست و شش پیست اسکی مانند ویل و برکنریج را در خود جای داده است. سایر فعالیت های زمستانی شامل اسنوبورد، سورتمه سواری، سورتمه سواری، پیاده روی برف و برف سواری است. این ایالت مملو از پارک‌های ملی، مراتع و جنگل‌هایی است که در هوای گرم‌تر می‌توانید از پیاده‌روی، دوچرخه‌سواری در کوهستان یا صخره‌نوردی لذت ببرید."
              link="/"
              title="جنگل های کلرادو"
              coverImg="/public/images/Tourism/Slider/img3.jpg"
            />
            <CardSearchPage
              country="ایالات متحده / آمریکای شمالی"
              disc="کلرادو کمتر از بیست و شش پیست اسکی مانند ویل و برکنریج را در خود جای داده است. سایر فعالیت های زمستانی شامل اسنوبورد، سورتمه سواری، سورتمه سواری، پیاده روی برف و برف سواری است. این ایالت مملو از پارک‌های ملی، مراتع و جنگل‌هایی است که در هوای گرم‌تر می‌توانید از پیاده‌روی، دوچرخه‌سواری در کوهستان یا صخره‌نوردی لذت ببرید."
              link="/"
              title="جنگل های کلرادو"
              coverImg="/public/images/Tourism/Slider/img8.jpg"
            />
            <CardSearchPage
              country="ایالات متحده / آمریکای شمالی"
              disc="کلرادو کمتر از بیست و شش پیست اسکی مانند ویل و برکنریج را در خود جای داده است. سایر فعالیت های زمستانی شامل اسنوبورد، سورتمه سواری، سورتمه سواری، پیاده روی برف و برف سواری است. این ایالت مملو از پارک‌های ملی، مراتع و جنگل‌هایی است که در هوای گرم‌تر می‌توانید از پیاده‌روی، دوچرخه‌سواری در کوهستان یا صخره‌نوردی لذت ببرید."
              link="/"
              title="جنگل های کلرادو"
              coverImg="/public/images/Tourism/Slider/img3.jpg"
            />
            <CardSearchPage
              country="ایالات متحده / آمریکای شمالی"
              disc="کلرادو کمتر از بیست و شش پیست اسکی مانند ویل و برکنریج را در خود جای داده است. سایر فعالیت های زمستانی شامل اسنوبورد، سورتمه سواری، سورتمه سواری، پیاده روی برف و برف سواری است. این ایالت مملو از پارک‌های ملی، مراتع و جنگل‌هایی است که در هوای گرم‌تر می‌توانید از پیاده‌روی، دوچرخه‌سواری در کوهستان یا صخره‌نوردی لذت ببرید."
              link="/"
              title="جنگل های کلرادو"
              coverImg="/public/images/Tourism/Slider/img3.jpg"
            />
            <CardSearchPage
              country="ایالات متحده / آمریکای شمالی"
              disc="کلرادو کمتر از بیست و شش پیست اسکی مانند ویل و برکنریج را در خود جای داده است. سایر فعالیت های زمستانی شامل اسنوبورد، سورتمه سواری، سورتمه سواری، پیاده روی برف و برف سواری است. این ایالت مملو از پارک‌های ملی، مراتع و جنگل‌هایی است که در هوای گرم‌تر می‌توانید از پیاده‌روی، دوچرخه‌سواری در کوهستان یا صخره‌نوردی لذت ببرید."
              link="/"
              title="جنگل های کلرادو"
              coverImg="/public/images/Tourism/Slider/img3.jpg"
            />
            <CardSearchPage
              country="ایالات متحده / آمریکای شمالی"
              disc="کلرادو کمتر از بیست و شش پیست اسکی مانند ویل و برکنریج را در خود جای داده است. سایر فعالیت های زمستانی شامل اسنوبورد، سورتمه سواری، سورتمه سواری، پیاده روی برف و برف سواری است. این ایالت مملو از پارک‌های ملی، مراتع و جنگل‌هایی است که در هوای گرم‌تر می‌توانید از پیاده‌روی، دوچرخه‌سواری در کوهستان یا صخره‌نوردی لذت ببرید."
              link="/"
              title="جنگل های کلرادو"
              coverImg="/public/images/Tourism/Slider/img3.jpg"
            />
            <CardSearchPage
              country="ایالات متحده / آمریکای شمالی"
              disc="کلرادو کمتر از بیست و شش پیست اسکی مانند ویل و برکنریج را در خود جای داده است. سایر فعالیت های زمستانی شامل اسنوبورد، سورتمه سواری، سورتمه سواری، پیاده روی برف و برف سواری است. این ایالت مملو از پارک‌های ملی، مراتع و جنگل‌هایی است که در هوای گرم‌تر می‌توانید از پیاده‌روی، دوچرخه‌سواری در کوهستان یا صخره‌نوردی لذت ببرید."
              link="/"
              title="جنگل های کلرادو"
              coverImg="/public/images/Tourism/Slider/img3.jpg"
            />
            <CardSearchPage
              country="ایالات متحده / آمریکای شمالی"
              disc="کلرادو کمتر از بیست و شش پیست اسکی مانند ویل و برکنریج را در خود جای داده است. سایر فعالیت های زمستانی شامل اسنوبورد، سورتمه سواری، سورتمه سواری، پیاده روی برف و برف سواری است. این ایالت مملو از پارک‌های ملی، مراتع و جنگل‌هایی است که در هوای گرم‌تر می‌توانید از پیاده‌روی، دوچرخه‌سواری در کوهستان یا صخره‌نوردی لذت ببرید."
              link="/"
              title="جنگل های کلرادو"
              coverImg="/public/images/Tourism/Slider/img3.jpg"
            />
            <CardSearchPage
              country="ایالات متحده / آمریکای شمالی"
              disc="کلرادو کمتر از بیست و شش پیست اسکی مانند ویل و برکنریج را در خود جای داده است. سایر فعالیت های زمستانی شامل اسنوبورد، سورتمه سواری، سورتمه سواری، پیاده روی برف و برف سواری است. این ایالت مملو از پارک‌های ملی، مراتع و جنگل‌هایی است که در هوای گرم‌تر می‌توانید از پیاده‌روی، دوچرخه‌سواری در کوهستان یا صخره‌نوردی لذت ببرید."
              link="/"
              title="جنگل های کلرادو"
              coverImg="/public/images/Tourism/Slider/img3.jpg"
            />

            <SearchTitle
              isAddPlaceBtn={false}
              isSeeAllBtn={true}
              text="انجمن ها"
            />
            <Grid container>
              <Grid size={{ md: 6, xs: 12 }}>
                <ForumsSearchCard
                  date="15 ادیبهشت 1403"
                  disc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
                  name="شهروز کرمی"
                  nameOfForum="جزایر سه گانه"
                  profile="/public/images/Tourism/Slider/img5.jpg"
                  title="سفرهای دریایی"
                />
                <ForumsSearchCard
                  date="15 ادیبهشت 1403"
                  disc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
                  name="شهروز کرمی"
                  nameOfForum="جزایر سه گانه"
                  profile="/public/images/Tourism/Slider/img6.jpg"
                  title="سفرهای دریایی"
                />
                <ForumsSearchCard
                  date="15 ادیبهشت 1403"
                  disc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
                  name="شهروز کرمی"
                  nameOfForum="جزایر سه گانه"
                  profile="/public/images/Tourism/Slider/img7.jpg"
                  title="سفرهای دریایی"
                />
                <ForumsSearchCard
                  date="15 ادیبهشت 1403"
                  disc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
                  name="شهروز کرمی"
                  nameOfForum="جزایر سه گانه"
                  profile="/public/images/Tourism/Slider/img5.jpg"
                  title="سفرهای دریایی"
                />
              </Grid>
              <Grid size={{ md: 6, xs: 12 }}>
                <ForumsSearchCard
                  date="15 ادیبهشت 1403"
                  disc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
                  name="شهروز کرمی"
                  nameOfForum="جزایر سه گانه"
                  profile="/public/images/Tourism/Slider/img5.jpg"
                  title="سفرهای دریایی"
                />
                <ForumsSearchCard
                  date="15 ادیبهشت 1403"
                  disc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
                  name="شهروز کرمی"
                  nameOfForum="جزایر سه گانه"
                  profile="/public/images/Tourism/Slider/img5.jpg"
                  title="سفرهای دریایی"
                />
                <ForumsSearchCard
                  date="15 ادیبهشت 1403"
                  disc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
                  name="شهروز کرمی"
                  nameOfForum="جزایر سه گانه"
                  profile="/public/images/Tourism/Slider/img5.jpg"
                  title="سفرهای دریایی"
                />
              </Grid>
            </Grid>
          </Grid>

          {!isXs && (
            <Grid size={{ md: 3 }}>
              <LinkSide />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default SearchPage;
