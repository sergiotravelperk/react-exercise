import styled from "styled-components";

const NavBarContainer = styled.nav`
  font-size: 1.5em;
  text-align: center;
  background-color: #343a40;
  display: flex;
  justify-content: space-between;
  color: #fff;
  align-items: center;
  min-height: 80px;
  padding: 20px;
`;

const NavTitle = styled.div`
  font-weight: bold;
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: inherit;
    text-decoration: none;
  }
`;

const NavLogo = styled.img`
  content:url(${props => props.src});  
`;

const NavOption = styled.div`
  font-size: 1.2rem;
  a {
    color: inherit;
    text-decoration: none;
    border: 1px solid;
    padding: 10px 15px;
  }  
`;

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10%;
  padding: 10px 20px;
`;

const RecipeItemContainer  = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 0;
  margin: 10px 0;
  text-align: left;

  span {
    font-weight: bold;
    font-size: 1.4rem;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .icons {
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon {
      margin-left: 8px;
      cursor: pointer;
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  border-top: 2px solid #6c757d;
`;

const SearchContainer = styled.div`
  margin: 10px 10%;
`;

const SearchInput = styled.input`
  width: 99%;
  height: 50px;
  border-radius: 15px;
  padding: 5px 20px;
  font-size: 1rem;
`;

const FormRecipeContainer = styled.div`
  margin: 20px 20%;
`;

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 1rem;
  margin-top: 10px;
  label {
    font-weight: bold;
  }
  input {
    margin-top:5px;
    height: 35px;
    padding: 5px 10px;
  }
  .item-add {
    display: flex;
    flex-direction: row;
    align-items: center;
    input {
      height: 20px !important;
    }
    .item-icon {
      cursor: pointer;
      margin-left: 5px;
    }  
  }
`;

const FormListItem = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;

  .item-icon {
    cursor: pointer;
    margin-left: 5px;
  }  
`;

const FormButton = styled.button`
  background-color: #28a745;
  border: none;
  height: 50px;
  color: #fff;
  font-size: 1.2rem;
  margin-top: 20px;
  cursor: pointer;
  :disabled {
    background-color: #6c757d;
  }
`;

export {
    NavBarContainer,
    NavOption,
    NavTitle,
    NavLogo,
    RecipeContainer,
    RecipeItemContainer,
    Divider,
    SearchContainer,
    SearchInput,
    FormRecipeContainer,
    FormWrapper,
    FormListItem,
    FormButton
}