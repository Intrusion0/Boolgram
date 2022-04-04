<template>
    <header>
        <div class="ms-container">
            <div id="header-container">

                <!-- Logo -->
                <img id="logo" src="@/assets/logo.png" alt="logo-boolgram">

                <input type="text" placeholder="Cerca">
                
                <div class="profile-actions">
                    <!-- Home -->
                    <span>
                        <img src="@/assets/svgexport-18.svg" alt="">
                    </span>

                    <span class="position-relative">
                        <img src="@/assets/svgexport-10.svg" alt="">
                        <span class="position-absolute translate-middle badge notifications">
                            2
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    </span>

                    <span>
                        <img src="@/assets/svgexport-20.svg" alt="">
                    </span>

                    <span>
                        <img src="@/assets/svgexport-21.svg" alt="">
                    </span>
                    
                    <!-- Heart -->
                    <span>
                        <img src="@/assets/svgexport-22.svg" alt="">
                    </span>

                    <!-- Profile picture -->
                    <span>
                        <img src="@/assets/profile.jpg" alt="profile-picture" class="profile-picture">
                    </span>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

export default {
  name: 'Header',
}
</script>

<style lang="scss">
    
header {
    width: 100%;
    border-bottom: 1px solid #dbdbdb;
    padding: 15px 0;
    background-color: #fff;
    position: sticky;
    top: 0;
    z-index: 1;

    #header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        #logo {
            width: 12%;

            &:hover {
                cursor: pointer;
            }
        }
    
        input {
            height: 36px;
            background-color: #efefef;
            padding: 5px 30px;
            border: 0;
            border-radius: 8px;
            background-image: url('../assets/svgexport-17.png');
            background-repeat: no-repeat;
            background-position-x: 10px;
            background-position-y: center;
            text-indent: 5px;

            &:focus-visible {
                outline: none;
            }
        }

        .profile-actions {
            display: flex;
            align-items: center;

            span {
                font-size: 23px;
                margin-left: 25px;

                img {
                    width: 28px;
                    height: 30px;

                    &.profile-picture {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                    }

                    &:hover {
                        cursor: pointer;
                    }
                }

                i:hover {
                    cursor: pointer;
                }

                &.notifications {
                    top: 5px;
                    left: 3px;
                    font-size: 12px;
                    background-color: #ed4956;
                    border-radius: 50%;
                    padding: 4px 7px;
                }
            }
        }
    }

}

</style>