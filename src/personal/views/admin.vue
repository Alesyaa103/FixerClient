<template>
<section class="wraper contain">
    <input type="text" placeholder="Type here to search" />
    <ul class="admin">
        <li class="admin__green">
            <span>firstname</span>
            <span>lastname</span>
            <span>country</span>
            <span>status</span
            ><span>level</span>
            <span>e-mail</span>
        </li>
        <li>
            <span>Richard</span>
            <span>Richard</span>
            <span>Australia</span>
            <span>Requested</span>
            <span>
                <select>
                    <option value="">Gold</option>
                    <option value="">Silver</option>
                    <option value="">Bronze</option>
                </select>
            </span>
            <span>rfrome@gmail.com</span>
            <img src="@/assets/personal/cross.svg" alt="" />
        </li>
        <li>
            <span>Richard</span>
            <span>Richard</span>
            <span>Australia</span>
            <span>Requested</span>
            <span>
                <select>
                    <option value="">Gold</option>
                    <option value="">Silver</option>
                    <option value="">Bronze</option>
                </select>
            </span>
            <span>rfrome@gmail.com</span>
            <img src="@/assets/personal/cross.svg" alt="" />
        </li>
        <li>
            <span>Richard</span>
            <span>Richard</span>
            <span>Australia</span>
            <span>Requested</span>
            <span>
                <select>
                    <option value="">Gold</option>
                    <option value="">Silver</option>
                    <option value="">Bronze</option>
                </select>
            </span>
            <span>rfrome@gmail.com</span>
            <img src="@/assets/personal/cross.svg" alt="" />
        </li>
        <li>
            <span>Richard</span>
            <span>Richard</span>
            <span>Australia</span>
            <span>Requested</span>
            <span>
                <select>
                    <option value="">Gold</option>
                    <option value="">Silver</option>
                    <option value="">Bronze</option>
                </select>
            </span>
            <span>rfrome@gmail.com</span>
            <img src="@/assets/personal/cross.svg" alt="" />
        </li>
        <li>
            <span>Richard</span>
            <span>Richard</span>
            <span>Australia</span>
            <span>Requested</span>
            <span>
                <select>
                    <option value="">Gold</option>
                    <option value="">Silver</option>
                    <option value="">Bronze</option>
                </select>
            </span>
            <span>rfrome@gmail.com</span>
            <img src="@/assets/personal/cross.svg" alt="" />
        </li>
        <li>
            <span>Richard</span>
            <span>Richard</span>
            <span>Australia</span>
            <span>Requested</span>
            <span>
                <select>
                    <option value="">Gold</option>
                    <option value="">Silver</option>
                    <option value="">Bronze</option>
                </select>
            </span>
            <span>rfrome@gmail.com</span>
            <img src="@/assets/personal/cross.svg" alt="" />
        </li>
        <li>
            <span>Richard</span>
            <span>Richard</span>
            <span>Australia</span>
            <span>Requested</span>
            <span>
                <select>
                    <option value="">Gold</option>
                    <option value="">Silver</option>
                    <option value="">Bronze</option>
                </select>
            </span>
            <span>rfrome@gmail.com</span>
            <img src="@/assets/personal/cross.svg" alt="" />
        </li>
    </ul>
</section>
</template>
<script>

export default {
  name: 'admin',
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
.contain{
    padding: 3%;
    & input{
        font-family: $roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.5px;
        color: #252F48;
        mix-blend-mode: normal;
        opacity: 0.2;
        width: 184px;
        height: 22px;
        margin-bottom: 12px;
    }
}
.admin{
    margin: 0 auto;
    background: #FFFFFF;
    box-sizing: border-box;
    box-shadow: -2px 9px 8px rgba(23, 31, 76, 0.03);
    border-radius: 4px;
    height: 90%;
    overflow: auto;
    &__green{
        background: #F5F7FA;
        border-radius: 2px;
        & span{
            font-family: $roboto;
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 0.6px;
            text-transform: uppercase;
            color: #01134E;
            width: 16.5%;
            min-width: 83px;
            text-align: center;
            padding-top: 1%;
        }
    }
    & li{
        min-height: 42px;
        height: 16%;
        border: 1px solid #DAE4F2;
        display: flex;
        & span{
            font-family: $roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 28px;
            letter-spacing: -0.046704px;
            color: #000000;
            width: 16.5%;
            min-width: 83px;
            text-align: center;
            padding-top: 1%;
            & select{
                border: none;
            }
        }
        & img{
            width: 9px;
            height: 9px;
            margin-top: 2%;
            margin-right: 2%;
        }
    }
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
</style>
