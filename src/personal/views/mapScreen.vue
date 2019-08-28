<template>
<section class="wraper combine">
    <div class="cover">
        <form class="search">
            <span>location
                <select class="location">
                    <option> </option>
                    <option value="AF">AFGHANISTAN</option>
                    <option value="AD">ANDORRA</option>
                    <option value="AO">ANGOLA</option>
                    <option value="AQ">ANTARCTICA</option>
                    <option value="AR">ARGENTINA</option>
                    <option value="AM">ARMENIA</option>
                    <option value="AU">AUSTRALIA</option>
                    <option value="AT">AUSTRIA</option>
                    <option value="AZ">AZERBAIJAN</option>
                    <option value="BS">BAHAMAS</option>
                    <option value="BD">BANGLADESH</option>
                    <option value="BY">BELARUS</option>
                    <option value="BE">BELGIUM</option>
                    <option value="BR">BRAZIL</option>
                    <option value="BG">BULGARIA</option>
                    <option value="CA">CANADA</option>
                    <option value="CL">CHILE</option>
                    <option value="CN">CHINA</option>
                    <option value="CO">COLOMBIA</option>
                    <option value="CU">CUBA</option>
                    <option value="CZ">CZECH REPUBLIC</option>
                    <option value="DO">DOMINICAN REPUBLIC</option>
                    <option value="EC">ECUADOR</option>
                    <option value="EG">EGYPT</option>
                    <option value="EE">ESTONIA</option>
                    <option value="ET">ETHIOPIA</option>
                    <option value="FJ">FIJI</option>
                    <option value="FI">FINLAND</option>
                    <option value="FR">FRANCE</option>
                    <option value="DE">GERMANY</option>
                    <option value="GR">GREECE</option>
                    <option value="HK">HONG KONG</option>
                    <option value="HU">HUNGARY</option>
                    <option value="IN">INDIA</option>
                    <option value="IT">ITALY</option>
                    <option value="JM">JAMAICA</option>
                    <option value="JP">JAPAN</option>
                    <option value="JO">JORDAN</option>
                    <option value="KZ">KAZAKHSTAN</option>
                    <option value="KE">KENYA</option>
                    <option value="LV">LATVIA</option>
                    <option value="LU">LUXEMBOURG</option>
                    <option value="MV">MALDIVES</option>
                    <option value="MX">MEXICO</option>
                    <option value="MC">MONACO</option>
                    <option value="NL">NETHERLANDS</option>
                    <option value="NZ">NEW ZEALAND</option>
                    <option value="PL">POLAND</option>
                    <option value="PT">PORTUGAL</option>
                    <option value="RO">ROMANIA</option>
                    <option value="RU">RUSSIAN FEDERATION</option>
                    <option value="SK">SLOVAKIA</option>
                    <option value="SI">SLOVENIA</option>
                    <option value="ES">SPAIN</option>
                    <option value="LK">SRI LANKA</option>
                    <option value="SE">SWEDEN</option>
                    <option value="TR">TURKEY</option>
                    <option value="UA">UKRAINE</option>
                    <option value="AE">UNITED ARAB EMIRATES</option>
                    <option value="GB">UNITED KINGDOM</option>
                    <option value="US">UNITED STATES</option>
                </select></span><span>search<input type="text"
                    placeholder="Type your querty" /></span><span>category<select>
                    <option value="">Category</option>
                </select></span><span>service<select>
                    <option value="">3 services</option>
                </select></span>
                <span>period <input type="date" name="calendar" value="2019-08-20" max="2021-06-04" min="2019-08-01">
                </span>
            <div class="search__button"></div>
            <button type="submit">search</button>
        </form>
        <div class="results">
            <span class="map">show results</span>
                <myMap />
            <script type="application/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCdXWcV_Jb3exf1-wI7FQ8XXemxy8g2RM0"></script>
        </div>
    </div>
</section>
</template>
<script>
import myMap from '../components/myMap.vue';

export default {
  name: 'mapScreen',
  components: {
    myMap,
  },
};

</script>
<style lang="scss" scoped>
@import "@/styles/_mixins.scss";
.wraper {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 30px rgba(153, 163, 174, 0.06);
    height: 65%;
    margin: 2% auto;
    padding: 5% 5%;
    width: 80%;

    @include onPhone {
        height: 93%;
        margin: 0 auto;
        width: 100%;
    }
}

.combine {
    display: flex;
    height: 87%;
    padding: 0;
    width: 90%;
}

form {
    display: flex;

    & span {
        color: #546087;
        display: block;
        font-family: $roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        height: 61px;
        letter-spacing: 1px;
        line-height: 14px;
        margin-bottom: 30px;
        text-transform: uppercase;

        & input,
        select {
            background: #fcfcfc;
            border: 2px solid #f2f2f2;
            border-radius: 2px;
            color: #35373b;
            font-family: $roboto;
            font-size: 14px;
            font-style: normal;
            font-weight: normal;
            height: 36px;
            letter-spacing: 0.28px;
            line-height: 16px;
            margin-top: 4px;
            padding-left: 13px;
            width: 259px;
        }

        & select {
            height: 42px;
            width: 276px;
        }
    }
}

.location {
    background: url("../../assets/personal/geo.svg") no-repeat transparent;
    background-position: 6% 50%;
}

.cover {
    display: flex;
    margin: 3% 0;
}
.search {
    border-right: 1px solid #e7eaf5;
    box-shadow: 7px 0 18px -15px rgba(85, 85, 85, 0.25);
    display: block;
    padding: 0 3%;
    width: 250px;

    & select {
        width: 250px;
    }

    &__button {
        display: flex;
        justify-content: flex-end;
        margin-top: 30px;
    }

    & button {
        background-color: $success;
        border-radius: 2px;
        color: #fff;
        color: #fff;
        font-family: $exo2;
        font-family: $roboto;
        font-size: 16px;
        font-size: 14px;
        font-style: normal;
        font-style: normal;
        font-weight: bold;
        font-weight: 600;
        height: 42px;
        letter-spacing: 0.4px;
        letter-spacing: 0.4px;
        line-height: 19px;
        line-height: 16px;
        text-align: center;
        text-transform: uppercase;
        width: 250px;
    }
}

.results {
    height: 100%;
    margin: 0 5%;
}

#map {
    width: 750px;
    height: 470px;
}

.map {
    color: #546087;
    display: block;
    font-family: $roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    height: 17px;
    letter-spacing: 1px;
    line-height: 14px;
    margin-bottom: 14px;
    text-transform: uppercase;
}
</style>
