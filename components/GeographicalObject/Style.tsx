import styled from "styled-components/native";
import {ImageBackground, StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

export const GradientBackground = styled(LinearGradient)`
  flex: 1;
`;

export const GeographicalObjectView = styled.View`
  position: relative;
  display: flex;
  //border: 2px solid #ffffff;
  max-height: 100%;
  align-items: center;
  //border-radius: 12px;
  background-color: rgba(195, 96, 42, 0.7);
  backdrop-filter: blur(16px) saturate(180%);
  filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125));
  cursor: pointer;
  overflow: hidden;
  color: #ffffff;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 1);
  transition: all 0.3s ease;
  flex-direction: row;
  padding: 15px;
`;

export const GeographicalObjectViewDetail = styled.View`
  position: relative;
  display: flex;
  max-height: 100%;
  align-items: center;
  backdrop-filter: blur(16px) saturate(180%);
  filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125));
  cursor: pointer;
  overflow: hidden;
  color: #ffffff;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 1);
  transition: all 0.3s ease;
  flex-direction: column; /* Change flex-direction to column */
  padding: 15px;
`;

export const GeographicalObjectImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 12px;
  margin-right: 12px;
`;

export const styles = StyleSheet.create({
    textContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});

export const TextDescribe = styled.Text`
  font-size: 10px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
`;
export const TextFeature = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
`;


export const GeographicalObjectBackground = styled(ImageBackground)`
  background: rgba(255, 255, 255, 0.1) url("http://127.0.0.1:35107/api/v1/buckets/images/objects/download?preview=true&prefix=ZHJpdmVycy9iYy1jYXJkMi5qcGc=&version_id=null") no-repeat;
  background-size: cover;
  width: 100%;
  padding: 10px;
`;