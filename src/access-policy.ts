// https://www.terraform.io/docs/providers/cloudflare/r/access_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#account_id AccessPolicy#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#application_id AccessPolicy#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#approval_required AccessPolicy#approval_required}
  */
  readonly approvalRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#decision AccessPolicy#decision}
  */
  readonly decision: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#name AccessPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#precedence AccessPolicy#precedence}
  */
  readonly precedence: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#purpose_justification_prompt AccessPolicy#purpose_justification_prompt}
  */
  readonly purposeJustificationPrompt?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#purpose_justification_required AccessPolicy#purpose_justification_required}
  */
  readonly purposeJustificationRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#zone_id AccessPolicy#zone_id}
  */
  readonly zoneId?: string;
  /**
  * approval_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#approval_group AccessPolicy#approval_group}
  */
  readonly approvalGroup?: AccessPolicyApprovalGroup[] | cdktf.IResolvable;
  /**
  * exclude block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#exclude AccessPolicy#exclude}
  */
  readonly exclude?: AccessPolicyExclude[] | cdktf.IResolvable;
  /**
  * include block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#include AccessPolicy#include}
  */
  readonly include: AccessPolicyInclude[] | cdktf.IResolvable;
  /**
  * require block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#require AccessPolicy#require}
  */
  readonly require?: AccessPolicyRequire[] | cdktf.IResolvable;
}
export interface AccessPolicyApprovalGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#approvals_needed AccessPolicy#approvals_needed}
  */
  readonly approvalsNeeded: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#email_addresses AccessPolicy#email_addresses}
  */
  readonly emailAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#email_list_uuid AccessPolicy#email_list_uuid}
  */
  readonly emailListUuid?: string;
}

export function accessPolicyApprovalGroupToTerraform(struct?: AccessPolicyApprovalGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approvals_needed: cdktf.numberToTerraform(struct!.approvalsNeeded),
    email_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.emailAddresses),
    email_list_uuid: cdktf.stringToTerraform(struct!.emailListUuid),
  }
}

export interface AccessPolicyExcludeAzure {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#id AccessPolicy#id}
  */
  readonly id?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessPolicyExcludeAzureToTerraform(struct?: AccessPolicyExcludeAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform)(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessPolicyExcludeGithub {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#name AccessPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#teams AccessPolicy#teams}
  */
  readonly teams?: string[];
}

export function accessPolicyExcludeGithubToTerraform(struct?: AccessPolicyExcludeGithub | cdktf.IResolvable): any {
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

export interface AccessPolicyExcludeGsuite {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#email AccessPolicy#email}
  */
  readonly email?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessPolicyExcludeGsuiteToTerraform(struct?: AccessPolicyExcludeGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform)(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessPolicyExcludeOkta {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#name AccessPolicy#name}
  */
  readonly name?: string[];
}

export function accessPolicyExcludeOktaToTerraform(struct?: AccessPolicyExcludeOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.listMapper(cdktf.stringToTerraform)(struct!.name),
  }
}

export interface AccessPolicyExcludeSaml {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#attribute_name AccessPolicy#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#attribute_value AccessPolicy#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessPolicyExcludeSamlToTerraform(struct?: AccessPolicyExcludeSaml | cdktf.IResolvable): any {
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

export interface AccessPolicyExclude {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#any_valid_service_token AccessPolicy#any_valid_service_token}
  */
  readonly anyValidServiceToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#auth_method AccessPolicy#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#certificate AccessPolicy#certificate}
  */
  readonly certificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#common_name AccessPolicy#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#device_posture AccessPolicy#device_posture}
  */
  readonly devicePosture?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#email AccessPolicy#email}
  */
  readonly email?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#email_domain AccessPolicy#email_domain}
  */
  readonly emailDomain?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#everyone AccessPolicy#everyone}
  */
  readonly everyone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#geo AccessPolicy#geo}
  */
  readonly geo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#group AccessPolicy#group}
  */
  readonly group?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#ip AccessPolicy#ip}
  */
  readonly ip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#login_method AccessPolicy#login_method}
  */
  readonly loginMethod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#service_token AccessPolicy#service_token}
  */
  readonly serviceToken?: string[];
  /**
  * azure block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#azure AccessPolicy#azure}
  */
  readonly azure?: AccessPolicyExcludeAzure[] | cdktf.IResolvable;
  /**
  * github block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#github AccessPolicy#github}
  */
  readonly github?: AccessPolicyExcludeGithub[] | cdktf.IResolvable;
  /**
  * gsuite block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#gsuite AccessPolicy#gsuite}
  */
  readonly gsuite?: AccessPolicyExcludeGsuite[] | cdktf.IResolvable;
  /**
  * okta block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#okta AccessPolicy#okta}
  */
  readonly okta?: AccessPolicyExcludeOkta[] | cdktf.IResolvable;
  /**
  * saml block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#saml AccessPolicy#saml}
  */
  readonly saml?: AccessPolicyExcludeSaml[] | cdktf.IResolvable;
}

export function accessPolicyExcludeToTerraform(struct?: AccessPolicyExclude | cdktf.IResolvable): any {
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
    azure: cdktf.listMapper(accessPolicyExcludeAzureToTerraform)(struct!.azure),
    github: cdktf.listMapper(accessPolicyExcludeGithubToTerraform)(struct!.github),
    gsuite: cdktf.listMapper(accessPolicyExcludeGsuiteToTerraform)(struct!.gsuite),
    okta: cdktf.listMapper(accessPolicyExcludeOktaToTerraform)(struct!.okta),
    saml: cdktf.listMapper(accessPolicyExcludeSamlToTerraform)(struct!.saml),
  }
}

export interface AccessPolicyIncludeAzure {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#id AccessPolicy#id}
  */
  readonly id?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessPolicyIncludeAzureToTerraform(struct?: AccessPolicyIncludeAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform)(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessPolicyIncludeGithub {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#name AccessPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#teams AccessPolicy#teams}
  */
  readonly teams?: string[];
}

export function accessPolicyIncludeGithubToTerraform(struct?: AccessPolicyIncludeGithub | cdktf.IResolvable): any {
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

export interface AccessPolicyIncludeGsuite {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#email AccessPolicy#email}
  */
  readonly email?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessPolicyIncludeGsuiteToTerraform(struct?: AccessPolicyIncludeGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform)(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessPolicyIncludeOkta {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#name AccessPolicy#name}
  */
  readonly name?: string[];
}

export function accessPolicyIncludeOktaToTerraform(struct?: AccessPolicyIncludeOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.listMapper(cdktf.stringToTerraform)(struct!.name),
  }
}

export interface AccessPolicyIncludeSaml {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#attribute_name AccessPolicy#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#attribute_value AccessPolicy#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessPolicyIncludeSamlToTerraform(struct?: AccessPolicyIncludeSaml | cdktf.IResolvable): any {
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

export interface AccessPolicyInclude {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#any_valid_service_token AccessPolicy#any_valid_service_token}
  */
  readonly anyValidServiceToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#auth_method AccessPolicy#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#certificate AccessPolicy#certificate}
  */
  readonly certificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#common_name AccessPolicy#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#device_posture AccessPolicy#device_posture}
  */
  readonly devicePosture?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#email AccessPolicy#email}
  */
  readonly email?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#email_domain AccessPolicy#email_domain}
  */
  readonly emailDomain?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#everyone AccessPolicy#everyone}
  */
  readonly everyone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#geo AccessPolicy#geo}
  */
  readonly geo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#group AccessPolicy#group}
  */
  readonly group?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#ip AccessPolicy#ip}
  */
  readonly ip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#login_method AccessPolicy#login_method}
  */
  readonly loginMethod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#service_token AccessPolicy#service_token}
  */
  readonly serviceToken?: string[];
  /**
  * azure block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#azure AccessPolicy#azure}
  */
  readonly azure?: AccessPolicyIncludeAzure[] | cdktf.IResolvable;
  /**
  * github block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#github AccessPolicy#github}
  */
  readonly github?: AccessPolicyIncludeGithub[] | cdktf.IResolvable;
  /**
  * gsuite block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#gsuite AccessPolicy#gsuite}
  */
  readonly gsuite?: AccessPolicyIncludeGsuite[] | cdktf.IResolvable;
  /**
  * okta block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#okta AccessPolicy#okta}
  */
  readonly okta?: AccessPolicyIncludeOkta[] | cdktf.IResolvable;
  /**
  * saml block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#saml AccessPolicy#saml}
  */
  readonly saml?: AccessPolicyIncludeSaml[] | cdktf.IResolvable;
}

export function accessPolicyIncludeToTerraform(struct?: AccessPolicyInclude | cdktf.IResolvable): any {
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
    azure: cdktf.listMapper(accessPolicyIncludeAzureToTerraform)(struct!.azure),
    github: cdktf.listMapper(accessPolicyIncludeGithubToTerraform)(struct!.github),
    gsuite: cdktf.listMapper(accessPolicyIncludeGsuiteToTerraform)(struct!.gsuite),
    okta: cdktf.listMapper(accessPolicyIncludeOktaToTerraform)(struct!.okta),
    saml: cdktf.listMapper(accessPolicyIncludeSamlToTerraform)(struct!.saml),
  }
}

export interface AccessPolicyRequireAzure {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#id AccessPolicy#id}
  */
  readonly id?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessPolicyRequireAzureToTerraform(struct?: AccessPolicyRequireAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform)(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessPolicyRequireGithub {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#name AccessPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#teams AccessPolicy#teams}
  */
  readonly teams?: string[];
}

export function accessPolicyRequireGithubToTerraform(struct?: AccessPolicyRequireGithub | cdktf.IResolvable): any {
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

export interface AccessPolicyRequireGsuite {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#email AccessPolicy#email}
  */
  readonly email?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessPolicyRequireGsuiteToTerraform(struct?: AccessPolicyRequireGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform)(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessPolicyRequireOkta {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#name AccessPolicy#name}
  */
  readonly name?: string[];
}

export function accessPolicyRequireOktaToTerraform(struct?: AccessPolicyRequireOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.listMapper(cdktf.stringToTerraform)(struct!.name),
  }
}

export interface AccessPolicyRequireSaml {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#attribute_name AccessPolicy#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#attribute_value AccessPolicy#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#identity_provider_id AccessPolicy#identity_provider_id}
  */
  readonly identityProviderId?: string;
}

export function accessPolicyRequireSamlToTerraform(struct?: AccessPolicyRequireSaml | cdktf.IResolvable): any {
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

export interface AccessPolicyRequire {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#any_valid_service_token AccessPolicy#any_valid_service_token}
  */
  readonly anyValidServiceToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#auth_method AccessPolicy#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#certificate AccessPolicy#certificate}
  */
  readonly certificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#common_name AccessPolicy#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#device_posture AccessPolicy#device_posture}
  */
  readonly devicePosture?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#email AccessPolicy#email}
  */
  readonly email?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#email_domain AccessPolicy#email_domain}
  */
  readonly emailDomain?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#everyone AccessPolicy#everyone}
  */
  readonly everyone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#geo AccessPolicy#geo}
  */
  readonly geo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#group AccessPolicy#group}
  */
  readonly group?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#ip AccessPolicy#ip}
  */
  readonly ip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#login_method AccessPolicy#login_method}
  */
  readonly loginMethod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#service_token AccessPolicy#service_token}
  */
  readonly serviceToken?: string[];
  /**
  * azure block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#azure AccessPolicy#azure}
  */
  readonly azure?: AccessPolicyRequireAzure[] | cdktf.IResolvable;
  /**
  * github block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#github AccessPolicy#github}
  */
  readonly github?: AccessPolicyRequireGithub[] | cdktf.IResolvable;
  /**
  * gsuite block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#gsuite AccessPolicy#gsuite}
  */
  readonly gsuite?: AccessPolicyRequireGsuite[] | cdktf.IResolvable;
  /**
  * okta block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#okta AccessPolicy#okta}
  */
  readonly okta?: AccessPolicyRequireOkta[] | cdktf.IResolvable;
  /**
  * saml block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy#saml AccessPolicy#saml}
  */
  readonly saml?: AccessPolicyRequireSaml[] | cdktf.IResolvable;
}

export function accessPolicyRequireToTerraform(struct?: AccessPolicyRequire | cdktf.IResolvable): any {
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
    azure: cdktf.listMapper(accessPolicyRequireAzureToTerraform)(struct!.azure),
    github: cdktf.listMapper(accessPolicyRequireGithubToTerraform)(struct!.github),
    gsuite: cdktf.listMapper(accessPolicyRequireGsuiteToTerraform)(struct!.gsuite),
    okta: cdktf.listMapper(accessPolicyRequireOktaToTerraform)(struct!.okta),
    saml: cdktf.listMapper(accessPolicyRequireSamlToTerraform)(struct!.saml),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy cloudflare_access_policy}
*/
export class AccessPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_access_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/access_policy cloudflare_access_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_access_policy',
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
    this._applicationId = config.applicationId;
    this._approvalRequired = config.approvalRequired;
    this._decision = config.decision;
    this._name = config.name;
    this._precedence = config.precedence;
    this._purposeJustificationPrompt = config.purposeJustificationPrompt;
    this._purposeJustificationRequired = config.purposeJustificationRequired;
    this._zoneId = config.zoneId;
    this._approvalGroup = config.approvalGroup;
    this._exclude = config.exclude;
    this._include = config.include;
    this._require = config.require;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
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

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // approval_required - computed: false, optional: true, required: false
  private _approvalRequired?: boolean | cdktf.IResolvable; 
  public get approvalRequired() {
    return this.getBooleanAttribute('approval_required');
  }
  public set approvalRequired(value: boolean | cdktf.IResolvable) {
    this._approvalRequired = value;
  }
  public resetApprovalRequired() {
    this._approvalRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalRequiredInput() {
    return this._approvalRequired;
  }

  // decision - computed: false, optional: false, required: true
  private _decision?: string; 
  public get decision() {
    return this.getStringAttribute('decision');
  }
  public set decision(value: string) {
    this._decision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get decisionInput() {
    return this._decision;
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

  // precedence - computed: false, optional: false, required: true
  private _precedence?: number; 
  public get precedence() {
    return this.getNumberAttribute('precedence');
  }
  public set precedence(value: number) {
    this._precedence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceInput() {
    return this._precedence;
  }

  // purpose_justification_prompt - computed: false, optional: true, required: false
  private _purposeJustificationPrompt?: string; 
  public get purposeJustificationPrompt() {
    return this.getStringAttribute('purpose_justification_prompt');
  }
  public set purposeJustificationPrompt(value: string) {
    this._purposeJustificationPrompt = value;
  }
  public resetPurposeJustificationPrompt() {
    this._purposeJustificationPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeJustificationPromptInput() {
    return this._purposeJustificationPrompt;
  }

  // purpose_justification_required - computed: false, optional: true, required: false
  private _purposeJustificationRequired?: boolean | cdktf.IResolvable; 
  public get purposeJustificationRequired() {
    return this.getBooleanAttribute('purpose_justification_required');
  }
  public set purposeJustificationRequired(value: boolean | cdktf.IResolvable) {
    this._purposeJustificationRequired = value;
  }
  public resetPurposeJustificationRequired() {
    this._purposeJustificationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeJustificationRequiredInput() {
    return this._purposeJustificationRequired;
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

  // approval_group - computed: false, optional: true, required: false
  private _approvalGroup?: AccessPolicyApprovalGroup[] | cdktf.IResolvable; 
  public get approvalGroup() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('approval_group');
  }
  public set approvalGroup(value: AccessPolicyApprovalGroup[] | cdktf.IResolvable) {
    this._approvalGroup = value;
  }
  public resetApprovalGroup() {
    this._approvalGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalGroupInput() {
    return this._approvalGroup;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: AccessPolicyExclude[] | cdktf.IResolvable; 
  public get exclude() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('exclude');
  }
  public set exclude(value: AccessPolicyExclude[] | cdktf.IResolvable) {
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
  private _include?: AccessPolicyInclude[] | cdktf.IResolvable; 
  public get include() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('include');
  }
  public set include(value: AccessPolicyInclude[] | cdktf.IResolvable) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // require - computed: false, optional: true, required: false
  private _require?: AccessPolicyRequire[] | cdktf.IResolvable; 
  public get require() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('require');
  }
  public set require(value: AccessPolicyRequire[] | cdktf.IResolvable) {
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
      application_id: cdktf.stringToTerraform(this._applicationId),
      approval_required: cdktf.booleanToTerraform(this._approvalRequired),
      decision: cdktf.stringToTerraform(this._decision),
      name: cdktf.stringToTerraform(this._name),
      precedence: cdktf.numberToTerraform(this._precedence),
      purpose_justification_prompt: cdktf.stringToTerraform(this._purposeJustificationPrompt),
      purpose_justification_required: cdktf.booleanToTerraform(this._purposeJustificationRequired),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      approval_group: cdktf.listMapper(accessPolicyApprovalGroupToTerraform)(this._approvalGroup),
      exclude: cdktf.listMapper(accessPolicyExcludeToTerraform)(this._exclude),
      include: cdktf.listMapper(accessPolicyIncludeToTerraform)(this._include),
      require: cdktf.listMapper(accessPolicyRequireToTerraform)(this._require),
    };
  }
}
