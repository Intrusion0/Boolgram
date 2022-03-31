<template>
    <header>
        <div class="ms-container">
            <div id="header-container">

                <!-- Logo -->
                <img id="logo" src="@/assets/logo.png" alt="logo-boolgram">

                <input type="text" placeholder="Cerca">
                
                <div class="profile-actions">
                    <!-- Heart -->
                    <span>
                        <i class="far fa-heart"></i>
                    </span>
                    
                    <!-- Home -->
                    <span>
                        <i class="fa-solid fa-house-chimney"></i>
                    </span>

                    <!-- Profile picture -->
                    <span>
                        <img src="@/assets/profile.jpg" alt="profile-picture">
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
                // background-image: none;
            }
        }

        .profile-actions {
            display: flex;
            align-items: center;

            span {
                font-size: 23px;
                margin-left: 20px;

                img {
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;

                    &:hover {
                        cursor: pointer;
                    }
                }

                i:hover {
                    cursor: pointer;
                }
            }
        }
    }

}

</style>