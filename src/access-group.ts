// https://www.terraform.io/docs/providers/cloudflare/r/access_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#account_id AccessGroup#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#name AccessGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#zone_id AccessGroup#zone_id}
  */
  readonly zoneId?: string;
  /**
  * exclude block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#exclude AccessGroup#exclude}
  */
  readonly exclude?: AccessGroupExclude[] | cdktf.IResolvable;
  /**
  * include block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#include AccessGroup#include}
  */
  readonly include: AccessGroupInclude[] | cdktf.IResolvable;
  /**
  * require block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#require AccessGroup#require}
  */
  readonly require?: AccessGroupRequire[] | cdktf.IResolvable;
}
export interface AccessGroupExcludeAzure {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#id AccessGroup#id}
  */
  readonly id?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessGroupExcludeAzureToTerraform(struct?: AccessGroupExcludeAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform)(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessGroupExcludeGithub {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#name AccessGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#teams AccessGroup#teams}
  */
  readonly teams?: string[];
}

export function accessGroupExcludeGithubToTerraform(struct?: AccessGroupExcludeGithub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.stringToTerraform(struct!.name),
    teams: cdktf.listMapper(cdktf.stringToTerraform)(struct!.teams),
  }
}

export interface AccessGroupExcludeGsuite {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email AccessGroup#email}
  */
  readonly email?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessGroupExcludeGsuiteToTerraform(struct?: AccessGroupExcludeGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform)(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessGroupExcludeOkta {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#name AccessGroup#name}
  */
  readonly name?: string[];
}

export function accessGroupExcludeOktaToTerraform(struct?: AccessGroupExcludeOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.listMapper(cdktf.stringToTerraform)(struct!.name),
  }
}

export interface AccessGroupExcludeSaml {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#attribute_name AccessGroup#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#attribute_value AccessGroup#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessGroupExcludeSamlToTerraform(struct?: AccessGroupExcludeSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessGroupExclude {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#any_valid_service_token AccessGroup#any_valid_service_token}
  */
  readonly anyValidServiceToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#auth_method AccessGroup#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#certificate AccessGroup#certificate}
  */
  readonly certificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#common_name AccessGroup#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#device_posture AccessGroup#device_posture}
  */
  readonly devicePosture?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email AccessGroup#email}
  */
  readonly email?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email_domain AccessGroup#email_domain}
  */
  readonly emailDomain?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#everyone AccessGroup#everyone}
  */
  readonly everyone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#geo AccessGroup#geo}
  */
  readonly geo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#group AccessGroup#group}
  */
  readonly group?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#ip AccessGroup#ip}
  */
  readonly ip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#login_method AccessGroup#login_method}
  */
  readonly loginMethod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#service_token AccessGroup#service_token}
  */
  readonly serviceToken?: string[];
  /**
  * azure block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#azure AccessGroup#azure}
  */
  readonly azure?: AccessGroupExcludeAzure[] | cdktf.IResolvable;
  /**
  * github block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#github AccessGroup#github}
  */
  readonly github?: AccessGroupExcludeGithub[] | cdktf.IResolvable;
  /**
  * gsuite block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#gsuite AccessGroup#gsuite}
  */
  readonly gsuite?: AccessGroupExcludeGsuite[] | cdktf.IResolvable;
  /**
  * okta block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#okta AccessGroup#okta}
  */
  readonly okta?: AccessGroupExcludeOkta[] | cdktf.IResolvable;
  /**
  * saml block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#saml AccessGroup#saml}
  */
  readonly saml?: AccessGroupExcludeSaml[] | cdktf.IResolvable;
}

export function accessGroupExcludeToTerraform(struct?: AccessGroupExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_valid_service_token: cdktf.booleanToTerraform(struct!.anyValidServiceToken),
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    certificate: cdktf.booleanToTerraform(struct!.certificate),
    common_name: cdktf.stringToTerraform(struct!.commonName),
    device_posture: cdktf.listMapper(cdktf.stringToTerraform)(struct!.devicePosture),
    email: cdktf.listMapper(cdktf.stringToTerraform)(struct!.email),
    email_domain: cdktf.listMapper(cdktf.stringToTerraform)(struct!.emailDomain),
    everyone: cdktf.booleanToTerraform(struct!.everyone),
    geo: cdktf.listMapper(cdktf.stringToTerraform)(struct!.geo),
    group: cdktf.listMapper(cdktf.stringToTerraform)(struct!.group),
    ip: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ip),
    login_method: cdktf.listMapper(cdktf.stringToTerraform)(struct!.loginMethod),
    service_token: cdktf.listMapper(cdktf.stringToTerraform)(struct!.serviceToken),
    azure: cdktf.listMapper(accessGroupExcludeAzureToTerraform)(struct!.azure),
    github: cdktf.listMapper(accessGroupExcludeGithubToTerraform)(struct!.github),
    gsuite: cdktf.listMapper(accessGroupExcludeGsuiteToTerraform)(struct!.gsuite),
    okta: cdktf.listMapper(accessGroupExcludeOktaToTerraform)(struct!.okta),
    saml: cdktf.listMapper(accessGroupExcludeSamlToTerraform)(struct!.saml),
  }
}

export interface AccessGroupIncludeAzure {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#id AccessGroup#id}
  */
  readonly id?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessGroupIncludeAzureToTerraform(struct?: AccessGroupIncludeAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform)(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessGroupIncludeGithub {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#name AccessGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#teams AccessGroup#teams}
  */
  readonly teams?: string[];
}

export function accessGroupIncludeGithubToTerraform(struct?: AccessGroupIncludeGithub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.stringToTerraform(struct!.name),
    teams: cdktf.listMapper(cdktf.stringToTerraform)(struct!.teams),
  }
}

export interface AccessGroupIncludeGsuite {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email AccessGroup#email}
  */
  readonly email?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessGroupIncludeGsuiteToTerraform(struct?: AccessGroupIncludeGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform)(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessGroupIncludeOkta {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#name AccessGroup#name}
  */
  readonly name?: string[];
}

export function accessGroupIncludeOktaToTerraform(struct?: AccessGroupIncludeOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.listMapper(cdktf.stringToTerraform)(struct!.name),
  }
}

export interface AccessGroupIncludeSaml {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#attribute_name AccessGroup#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#attribute_value AccessGroup#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessGroupIncludeSamlToTerraform(struct?: AccessGroupIncludeSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessGroupInclude {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#any_valid_service_token AccessGroup#any_valid_service_token}
  */
  readonly anyValidServiceToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#auth_method AccessGroup#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#certificate AccessGroup#certificate}
  */
  readonly certificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#common_name AccessGroup#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#device_posture AccessGroup#device_posture}
  */
  readonly devicePosture?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email AccessGroup#email}
  */
  readonly email?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email_domain AccessGroup#email_domain}
  */
  readonly emailDomain?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#everyone AccessGroup#everyone}
  */
  readonly everyone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#geo AccessGroup#geo}
  */
  readonly geo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#group AccessGroup#group}
  */
  readonly group?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#ip AccessGroup#ip}
  */
  readonly ip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#login_method AccessGroup#login_method}
  */
  readonly loginMethod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#service_token AccessGroup#service_token}
  */
  readonly serviceToken?: string[];
  /**
  * azure block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#azure AccessGroup#azure}
  */
  readonly azure?: AccessGroupIncludeAzure[] | cdktf.IResolvable;
  /**
  * github block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#github AccessGroup#github}
  */
  readonly github?: AccessGroupIncludeGithub[] | cdktf.IResolvable;
  /**
  * gsuite block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#gsuite AccessGroup#gsuite}
  */
  readonly gsuite?: AccessGroupIncludeGsuite[] | cdktf.IResolvable;
  /**
  * okta block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#okta AccessGroup#okta}
  */
  readonly okta?: AccessGroupIncludeOkta[] | cdktf.IResolvable;
  /**
  * saml block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#saml AccessGroup#saml}
  */
  readonly saml?: AccessGroupIncludeSaml[] | cdktf.IResolvable;
}

export function accessGroupIncludeToTerraform(struct?: AccessGroupInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_valid_service_token: cdktf.booleanToTerraform(struct!.anyValidServiceToken),
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    certificate: cdktf.booleanToTerraform(struct!.certificate),
    common_name: cdktf.stringToTerraform(struct!.commonName),
    device_posture: cdktf.listMapper(cdktf.stringToTerraform)(struct!.devicePosture),
    email: cdktf.listMapper(cdktf.stringToTerraform)(struct!.email),
    email_domain: cdktf.listMapper(cdktf.stringToTerraform)(struct!.emailDomain),
    everyone: cdktf.booleanToTerraform(struct!.everyone),
    geo: cdktf.listMapper(cdktf.stringToTerraform)(struct!.geo),
    group: cdktf.listMapper(cdktf.stringToTerraform)(struct!.group),
    ip: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ip),
    login_method: cdktf.listMapper(cdktf.stringToTerraform)(struct!.loginMethod),
    service_token: cdktf.listMapper(cdktf.stringToTerraform)(struct!.serviceToken),
    azure: cdktf.listMapper(accessGroupIncludeAzureToTerraform)(struct!.azure),
    github: cdktf.listMapper(accessGroupIncludeGithubToTerraform)(struct!.github),
    gsuite: cdktf.listMapper(accessGroupIncludeGsuiteToTerraform)(struct!.gsuite),
    okta: cdktf.listMapper(accessGroupIncludeOktaToTerraform)(struct!.okta),
    saml: cdktf.listMapper(accessGroupIncludeSamlToTerraform)(struct!.saml),
  }
}

export interface AccessGroupRequireAzure {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#id AccessGroup#id}
  */
  readonly id?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessGroupRequireAzureToTerraform(struct?: AccessGroupRequireAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform)(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessGroupRequireGithub {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#name AccessGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#teams AccessGroup#teams}
  */
  readonly teams?: string[];
}

export function accessGroupRequireGithubToTerraform(struct?: AccessGroupRequireGithub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.stringToTerraform(struct!.name),
    teams: cdktf.listMapper(cdktf.stringToTerraform)(struct!.teams),
  }
}

export interface AccessGroupRequireGsuite {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email AccessGroup#email}
  */
  readonly email?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessGroupRequireGsuiteToTerraform(struct?: AccessGroupRequireGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform)(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessGroupRequireOkta {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#name AccessGroup#name}
  */
  readonly name?: string[];
}

export function accessGroupRequireOktaToTerraform(struct?: AccessGroupRequireOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.listMapper(cdktf.stringToTerraform)(struct!.name),
  }
}

export interface AccessGroupRequireSaml {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#attribute_name AccessGroup#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#attribute_value AccessGroup#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#identity_provider_id AccessGroup#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessGroupRequireSamlToTerraform(struct?: AccessGroupRequireSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessGroupRequire {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#any_valid_service_token AccessGroup#any_valid_service_token}
  */
  readonly anyValidServiceToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#auth_method AccessGroup#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#certificate AccessGroup#certificate}
  */
  readonly certificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#common_name AccessGroup#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#device_posture AccessGroup#device_posture}
  */
  readonly devicePosture?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email AccessGroup#email}
  */
  readonly email?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#email_domain AccessGroup#email_domain}
  */
  readonly emailDomain?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#everyone AccessGroup#everyone}
  */
  readonly everyone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#geo AccessGroup#geo}
  */
  readonly geo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#group AccessGroup#group}
  */
  readonly group?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#ip AccessGroup#ip}
  */
  readonly ip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#login_method AccessGroup#login_method}
  */
  readonly loginMethod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#service_token AccessGroup#service_token}
  */
  readonly serviceToken?: string[];
  /**
  * azure block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#azure AccessGroup#azure}
  */
  readonly azure?: AccessGroupRequireAzure[] | cdktf.IResolvable;
  /**
  * github block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#github AccessGroup#github}
  */
  readonly github?: AccessGroupRequireGithub[] | cdktf.IResolvable;
  /**
  * gsuite block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#gsuite AccessGroup#gsuite}
  */
  readonly gsuite?: AccessGroupRequireGsuite[] | cdktf.IResolvable;
  /**
  * okta block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#okta AccessGroup#okta}
  */
  readonly okta?: AccessGroupRequireOkta[] | cdktf.IResolvable;
  /**
  * saml block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group#saml AccessGroup#saml}
  */
  readonly saml?: AccessGroupRequireSaml[] | cdktf.IResolvable;
}

export function accessGroupRequireToTerraform(struct?: AccessGroupRequire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_valid_service_token: cdktf.booleanToTerraform(struct!.anyValidServiceToken),
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    certificate: cdktf.booleanToTerraform(struct!.certificate),
    common_name: cdktf.stringToTerraform(struct!.commonName),
    device_posture: cdktf.listMapper(cdktf.stringToTerraform)(struct!.devicePosture),
    email: cdktf.listMapper(cdktf.stringToTerraform)(struct!.email),
    email_domain: cdktf.listMapper(cdktf.stringToTerraform)(struct!.emailDomain),
    everyone: cdktf.booleanToTerraform(struct!.everyone),
    geo: cdktf.listMapper(cdktf.stringToTerraform)(struct!.geo),
    group: cdktf.listMapper(cdktf.stringToTerraform)(struct!.group),
    ip: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ip),
    login_method: cdktf.listMapper(cdktf.stringToTerraform)(struct!.loginMethod),
    service_token: cdktf.listMapper(cdktf.stringToTerraform)(struct!.serviceToken),
    azure: cdktf.listMapper(accessGroupRequireAzureToTerraform)(struct!.azure),
    github: cdktf.listMapper(accessGroupRequireGithubToTerraform)(struct!.github),
    gsuite: cdktf.listMapper(accessGroupRequireGsuiteToTerraform)(struct!.gsuite),
    okta: cdktf.listMapper(accessGroupRequireOktaToTerraform)(struct!.okta),
    saml: cdktf.listMapper(accessGroupRequireSamlToTerraform)(struct!.saml),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group cloudflare_access_group}
*/
export class AccessGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_access_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/access_group cloudflare_access_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AccessGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_access_group',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._name = config.name;
    this._zoneId = config.zoneId;
    this._exclude = config.exclude;
    this._include = config.include;
    this._require = config.require;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: AccessGroupExclude[] | cdktf.IResolvable; 
  public get exclude() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('exclude');
  }
  public set exclude(value: AccessGroupExclude[] | cdktf.IResolvable) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: false, required: true
  private _include?: AccessGroupInclude[] | cdktf.IResolvable; 
  public get include() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('include');
  }
  public set include(value: AccessGroupInclude[] | cdktf.IResolvable) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // require - computed: false, optional: true, required: false
  private _require?: AccessGroupRequire[] | cdktf.IResolvable; 
  public get require() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('require');
  }
  public set require(value: AccessGroupRequire[] | cdktf.IResolvable) {
    this._require = value;
  }
  public resetRequire() {
    this._require = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireInput() {
    return this._require;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      name: cdktf.stringToTerraform(this._name),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      exclude: cdktf.listMapper(accessGroupExcludeToTerraform)(this._exclude),
      include: cdktf.listMapper(accessGroupIncludeToTerraform)(this._include),
      require: cdktf.listMapper(accessGroupRequireToTerraform)(this._require),
    };
  }
}
