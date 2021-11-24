import { Get, HttpCode, JsonController, OnUndefined } from 'routing-controllers'

@JsonController('/health-check')
export class HealthCheckController {
  @Get()
  @HttpCode(204) // Se a requisição ocorrer bem retorna 204
  @OnUndefined(204) // Se retornar undefined retorna 204
  getAll() {}
}
