<template>
<section class="wraper combine">
    <div class="cover">
        <form class="search" action="##">
            <span>location<select class="location">
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
                </select>
                </span>
                <span>category<select>
                    <option value="">Category</option>
                </select></span><span>subcategory<select>
                    <option value="">Subcategory</option>
                </select></span><span>service<select>
                    <option value="">3 services</option>
                </select></span><span>period<select>
                    <option value="">11/01/19 - 14/01/19</option>
                </select></span>
            <div class="search__button"></div>
            <button type="submit">search</button>
        </form>
        <div class="results">
            <div class="category">
                <p class="category__text">show map</p>
                <div class="category__button">
                    <input id="price" type="radio" name="category" value="by price" />
                    <label for="price">by price</label>
                    <input id="rating" type="radio" name="category" value="by rating" />
                    <label for="rating">by rating</label></div>
            </div>
            <div class="workers">
                <article class="worker">
                    <img class="worker__avatar" src="@/assets/personal/person1.svg" alt="" />
                    <div class="info">
                        <span class="info__name">Richard Thompson
                            <img class="img__star" src="@/assets/personal/gold.svg" /></span>
                        <div class="info__location">
                            <img src="@/assets/personal/geo.svg" alt="" />
                            <p>Vancouver, Canada</p>
                        </div>
                        <div class="info__stack">
                            <p class="inf">Stack:</p>
                            <p> Python, Django, Sketch</p>
                        </div>
                        <div class="info__price">
                            <p class="inf">Base Daily Rate:</p>
                            <p> $ 1,200 USD</p>
                        </div>
                    </div>
                </article>
                <article class="worker">
                    <img class="worker__avatar" src="@/assets/personal/person1.svg" alt="" />
                    <div class="info">
                        <span class="info__name">Richard Thompson
                            <img class="img__star" src="@/assets/personal/silver.svg" /></span>
                        <div class="info__location">
                            <img src="@/assets/personal/geo.svg" alt="" />
                            <p>Vancouver, Canada</p>
                        </div>
                        <div class="info__stack">
                            <p class="inf">Stack:</p>
                            <p> Python, Django, Sketch</p>
                        </div>
                        <div class="info__price">
                            <p class="inf">Base Daily Rate:</p>
                            <p> $ 1,200 USD</p>
                        </div>
                    </div>
                </article>
                <article class="worker">
                    <img class="worker__avatar" src="@/assets/personal/person1.svg" alt="" />
                    <div class="info"><span class="info__name">Richard Thompson
                        <img class="img__star" src="@/assets/personal/gold.svg" /></span>
                        <div class="info__location"><img src="@/assets/personal/geo.svg" alt="" />
                            <p>Vancouver, Canada</p>
                        </div>
                        <div class="info__stack">
                            <p class="inf">Stack:</p>
                            <p> Python, Django, Sketch</p>
                        </div>
                        <div class="info__price">
                            <p class="inf">Base Daily Rate:</p>
                            <p> $ 1,200 USD</p>
                        </div>
                    </div>
                </article>
                <article class="worker">
                    <img class="worker__avatar" src="@/assets/personal/person1.svg" alt="" />
                    <div class="info">
                        <span class="info__name">Richard Thompson
                            <img class="img__star" src="@/assets/personal/gold.svg" /></span>
                        <div class="info__location">
                            <img src="@/assets/personal/geo.svg" alt="" />
                            <p>Vancouver, Canada</p>
                        </div>
                        <div class="info__stack">
                            <p class="inf">Stack:</p>
                            <p> Python, Django, Sketch</p>
                        </div>
                        <div class="info__price">
                            <p class="inf">Base Daily Rate:</p>
                            <p> $ 1,200 USD</p>
                        </div>
                    </div>
                </article>
                <article class="worker">
                    <img class="worker__avatar" src="@/assets/personal/person1.svg" alt="" />
                    <div class="info">
                        <span class="info__name">Richard Thompson
                            <img class="img__star" src="@/assets/personal/gold.svg" /></span>
                        <div class="info__location">
                            <img src="@/assets/personal/geo.svg" alt="" />
                            <p>Vancouver, Canada</p>
                        </div>
                        <div class="info__stack">
                            <p class="inf">Stack:</p>
                            <p> Python, Django, Sketch</p>
                        </div>
                        <div class="info__price">
                            <p class="inf">Base Daily Rate:</p>
                            <p> $ 1,200 USD</p>
                        </div>
                    </div>
                </article>
                <article class="worker"><img class="worker__avatar" src="@/assets/personal/person1.svg" alt="" />
                    <div class="info"><span class="info__name">Richard Thompson
                        <img class="img__star" src="@/assets/personal/gold.svg" /></span>
                        <div class="info__location">
                            <img src="@/assets/personal/geo.svg" alt="" />
                            <p>Vancouver, Canada</p>
                        </div>
                        <div class="info__stack">
                            <p class="inf">Stack:</p>
                            <p> Python, Django, Sketch</p>
                        </div>
                        <div class="info__price">
                            <p class="inf">Base Daily Rate:</p>
                            <p> $ 1,200 USD</p>
                        </div>
                    </div>
                </article>
                <article class="worker">
                    <img class="worker__avatar" src="@/assets/personal/person1.svg" alt="" />
                    <div class="info">
                        <span class="info__name">Richard Thompson
                        <img class="img__star" src="@/assets/personal/gold.svg" /></span>
                        <div class="info__location">
                            <img src="@/assets/personal/geo.svg" alt="" />
                            <p>Vancouver, Canada</p>
                        </div>
                        <div class="info__stack">
                            <p class="inf">Stack:</p>
                            <p> Python, Django, Sketch</p>
                        </div>
                        <div class="info__price">
                            <p class="inf">Base Daily Rate:</p>
                            <p> $ 1,200 USD</p>
                        </div>
                    </div>
                </article>
                <article class="worker">
                    <img class="worker__avatar" src="@/assets/personal/person1.svg" alt="" />
                    <div class="info">
                        <span class="info__name">Richard Thompson
                            <img class="img__star" src="@/assets/personal/gold.svg" /></span>
                        <div class="info__location">
                            <img src="@/assets/personal/geo.svg" alt="" />
                            <p>Vancouver, Canada</p>
                        </div>
                        <div class="info__stack">
                            <p class="inf">Stack:</p>
                            <p> Python, Django, Sketch</p>
                        </div>
                        <div class="info__price">
                            <p class="inf">Base Daily Rate:</p>
                            <p> $ 1,200 USD</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</section>
</template>
<script>
import firstPath from '../../assets/personal/searchActiv.svg';
import secondPath from '../../assets/personal/myprofile.svg';
import thirdPath from '../../assets/personal/messages.svg';
import fourthPath from '../../assets/personal/calendar.svg';

export default {
  name: 'search',
  data() {
    return {
      returnItems: {
        firstLink: 'search',
        firstPath,
        secondLink: 'profile',
        secondPath,
        thirdLink: 'chat',
        thirdPath,
        fourthLink: '',
        fourthPath,
      },
    };
  },
  mounted() {
    this.$emit('returnItems', this.returnItems);
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

.category {
    align-items: center;
    display: flex;
    height: 28px;
    justify-content: space-between;

    &__text {
        color: #01134e;
        font-family: $roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 0.28px;
        line-height: 14px;
        text-transform: uppercase;
    }

    &__button{
        align-items: center;
        display: flex;
        justify-content: space-around;
        width: 200px;
        & label{
            color: #000;
            font-family: Roboto;
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            letter-spacing: -0.046704px;
            line-height: 28px;
        }
    }
}

.workers {
    display: flex;
    flex-wrap: wrap;
    height: 90%;
    justify-content: space-between;
    min-width: 750px;
    overflow: auto;
}

.worker {
    align-items: center;
    border: 1px solid rgba(237, 237, 237, 0.2);
    border-radius: 2px;
    box-shadow: -2px 9px 30px rgba(23, 31, 76, 0.06);
    box-sizing: border-box;
    display: flex;
    height: 128px;
    justify-content: space-around;
    margin: 0 18px 18px 0;
    width: 330px;

    &__avatar {
        height: 76px;
        width: 76px;
    }
}

.info {
    width: 67%;

    &__name {
        color: #000;
        font-family: $roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: normal;
        letter-spacing: -0.046704px;
        line-height: 28px;
        margin-bottom: 10px;
    }

    & p {
        color: #000;
        font-family: $roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 300;
        letter-spacing: -0.046704px;
        line-height: 12px;
    }

    &__location {
        display: flex;
        margin-bottom: 6px;

        & img {
            margin-right: 5px;
        }
    }

    &__stack,
    &__price {
        display: flex;
        margin-bottom: 9px;
    }
}

.inf{
    color: #01134e;
    font-weight: normal;
}

::-webkit-scrollbar-button {
    background-image: url('');
    background-repeat: no-repeat;
    height: 0;
    width: 5px;
}

::-webkit-scrollbar-track {
    background-color: #ecedee
}

::-webkit-scrollbar-thumb {
    -webkit-border-radius: 0;
    background-color: #dadada;
    border-radius: 0;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #dadada;
}

::-webkit-resizer {
    background-image: url('');
    background-repeat: no-repeat;
    height: 0;
    width: 4px;
}

::-webkit-scrollbar {
    width: 4px;
}

.category__button input[type="radio"]:checked,
.category__button input[type="radio"]:not(:checked) {
	position: absolute;
	visibility: hidden;
	& + label {
		cursor: pointer;
		display: inline-block;
		line-height: 20px;
		padding-left: 1.725rem;
		position: relative;
		&:before {
			background: #fff;
			border: 1px solid rgba(0,0,0,0.2);
			border-radius: 100%;
			content: '';
			height: 18px;
			left: 0;
			position: absolute;
			top: 0;
			width: 18px;
		}

		&:after {
			-webkit-transition: all 0.2s ease;
			background: #0ad69c;
			border-radius: 100%;
			content: '';
			height: 12px;
			left: 4px;
			position: absolute;
			top: 4px;
			transition: all 0.2s ease;
			width: 12px;
		}
	}
}

input[type="radio"]:not(:checked) + label:after {
  -webkit-transform: scale(0);
  opacity: 0;
  transform: scale(0);
}

input[type="radio"]:checked + label:after {
  -webkit-transform: scale(1);
  opacity: 1;
  transform: scale(1);
}

.img-date{
    left: 19px;
    position: absolute;
    top: 27px;
}
</style>
