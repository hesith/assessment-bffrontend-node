import jwt from 'jsonwebtoken';
import { LoginDto } from '../types/interfaces/requests/authentication/login-dto';
import { users } from '../mock-data/users';
import { LoginResponseDto } from '../types/interfaces/responses/login-response-dto';
import { ApiResponse } from '../types/interfaces/api-response.interface';
import bcrypt from 'bcryptjs';

class AuthManager{

    login = async(credentials: LoginDto): Promise<ApiResponse<LoginResponseDto>> =>{
        const user = users.find(user => user.email === credentials.email)
            
        if(user!=undefined){
            const validatePasword = await bcrypt.compare(credentials.password, user.password);

            if(validatePasword===true){
                const token = await this.generateToken(credentials.email);

                const data:LoginResponseDto = {
                    accessToken: token, 
                    id: user?.id, 
                    firstName: user?.firstName,
                    lastName: user?.lastName,
                    email: user?.email
                }
                
                const response: ApiResponse<LoginResponseDto> = {success: true, msg: 'Success', data: data}
                return response;
            }
            else{
                const response: ApiResponse<LoginResponseDto> = {success: false, msg: 'Invalid Password', data: null}
                return response;
            }
            
        }
        else{
            const response: ApiResponse<LoginResponseDto> = {success: false, msg: 'Email not found', data: null}
            return response;
        }
    }

    public validateJwt = (token: string) => {
        return (jwt.verify(token, process.env.JWT_SECRET ?? '') == jwt.decode(token));
    }

    private generateToken = async(email: string) =>{
        const token = jwt.sign(email, process.env.JWT_SECRET ?? "");
        return token;
    }


}

export const authManager = new AuthManager();