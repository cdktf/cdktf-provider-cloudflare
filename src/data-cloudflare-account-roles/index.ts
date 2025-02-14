// https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/account_roles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareAccountRolesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/account_roles#account_id DataCloudflareAccountRoles#account_id}
  */
  readonly accountId: string;
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/account_roles#max_items DataCloudflareAccountRoles#max_items}
  */
  readonly maxItems?: number;
}
export interface DataCloudflareAccountRolesResultPermissionsAnalytics {
}

export function dataCloudflareAccountRolesResultPermissionsAnalyticsToTerraform(struct?: DataCloudflareAccountRolesResultPermissionsAnalytics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAccountRolesResultPermissionsAnalyticsToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissionsAnalytics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAccountRolesResultPermissionsAnalyticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAccountRolesResultPermissionsAnalytics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAccountRolesResultPermissionsAnalytics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataCloudflareAccountRolesResultPermissionsBilling {
}

export function dataCloudflareAccountRolesResultPermissionsBillingToTerraform(struct?: DataCloudflareAccountRolesResultPermissionsBilling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAccountRolesResultPermissionsBillingToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissionsBilling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAccountRolesResultPermissionsBillingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAccountRolesResultPermissionsBilling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAccountRolesResultPermissionsBilling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataCloudflareAccountRolesResultPermissionsCachePurge {
}

export function dataCloudflareAccountRolesResultPermissionsCachePurgeToTerraform(struct?: DataCloudflareAccountRolesResultPermissionsCachePurge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAccountRolesResultPermissionsCachePurgeToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissionsCachePurge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAccountRolesResultPermissionsCachePurgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAccountRolesResultPermissionsCachePurge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAccountRolesResultPermissionsCachePurge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataCloudflareAccountRolesResultPermissionsDns {
}

export function dataCloudflareAccountRolesResultPermissionsDnsToTerraform(struct?: DataCloudflareAccountRolesResultPermissionsDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAccountRolesResultPermissionsDnsToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissionsDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAccountRolesResultPermissionsDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAccountRolesResultPermissionsDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAccountRolesResultPermissionsDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataCloudflareAccountRolesResultPermissionsDnsRecords {
}

export function dataCloudflareAccountRolesResultPermissionsDnsRecordsToTerraform(struct?: DataCloudflareAccountRolesResultPermissionsDnsRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAccountRolesResultPermissionsDnsRecordsToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissionsDnsRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAccountRolesResultPermissionsDnsRecordsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAccountRolesResultPermissionsDnsRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAccountRolesResultPermissionsDnsRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataCloudflareAccountRolesResultPermissionsLb {
}

export function dataCloudflareAccountRolesResultPermissionsLbToTerraform(struct?: DataCloudflareAccountRolesResultPermissionsLb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAccountRolesResultPermissionsLbToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissionsLb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAccountRolesResultPermissionsLbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAccountRolesResultPermissionsLb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAccountRolesResultPermissionsLb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataCloudflareAccountRolesResultPermissionsLogs {
}

export function dataCloudflareAccountRolesResultPermissionsLogsToTerraform(struct?: DataCloudflareAccountRolesResultPermissionsLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAccountRolesResultPermissionsLogsToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissionsLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAccountRolesResultPermissionsLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAccountRolesResultPermissionsLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAccountRolesResultPermissionsLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataCloudflareAccountRolesResultPermissionsOrganization {
}

export function dataCloudflareAccountRolesResultPermissionsOrganizationToTerraform(struct?: DataCloudflareAccountRolesResultPermissionsOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAccountRolesResultPermissionsOrganizationToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissionsOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAccountRolesResultPermissionsOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAccountRolesResultPermissionsOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAccountRolesResultPermissionsOrganization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataCloudflareAccountRolesResultPermissionsSsl {
}

export function dataCloudflareAccountRolesResultPermissionsSslToTerraform(struct?: DataCloudflareAccountRolesResultPermissionsSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAccountRolesResultPermissionsSslToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissionsSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAccountRolesResultPermissionsSslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAccountRolesResultPermissionsSsl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAccountRolesResultPermissionsSsl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataCloudflareAccountRolesResultPermissionsWaf {
}

export function dataCloudflareAccountRolesResultPermissionsWafToTerraform(struct?: DataCloudflareAccountRolesResultPermissionsWaf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAccountRolesResultPermissionsWafToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissionsWaf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAccountRolesResultPermissionsWafOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAccountRolesResultPermissionsWaf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAccountRolesResultPermissionsWaf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataCloudflareAccountRolesResultPermissionsZoneSettings {
}

export function dataCloudflareAccountRolesResultPermissionsZoneSettingsToTerraform(struct?: DataCloudflareAccountRolesResultPermissionsZoneSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAccountRolesResultPermissionsZoneSettingsToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissionsZoneSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAccountRolesResultPermissionsZoneSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAccountRolesResultPermissionsZoneSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAccountRolesResultPermissionsZoneSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataCloudflareAccountRolesResultPermissionsZones {
}

export function dataCloudflareAccountRolesResultPermissionsZonesToTerraform(struct?: DataCloudflareAccountRolesResultPermissionsZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAccountRolesResultPermissionsZonesToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissionsZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAccountRolesResultPermissionsZonesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAccountRolesResultPermissionsZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAccountRolesResultPermissionsZones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  public get read() {
    return this.getBooleanAttribute('read');
  }

  // write - computed: true, optional: false, required: false
  public get write() {
    return this.getBooleanAttribute('write');
  }
}
export interface DataCloudflareAccountRolesResultPermissions {
}

export function dataCloudflareAccountRolesResultPermissionsToTerraform(struct?: DataCloudflareAccountRolesResultPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAccountRolesResultPermissionsToHclTerraform(struct?: DataCloudflareAccountRolesResultPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAccountRolesResultPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareAccountRolesResultPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAccountRolesResultPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analytics - computed: true, optional: false, required: false
  private _analytics = new DataCloudflareAccountRolesResultPermissionsAnalyticsOutputReference(this, "analytics");
  public get analytics() {
    return this._analytics;
  }

  // billing - computed: true, optional: false, required: false
  private _billing = new DataCloudflareAccountRolesResultPermissionsBillingOutputReference(this, "billing");
  public get billing() {
    return this._billing;
  }

  // cache_purge - computed: true, optional: false, required: false
  private _cachePurge = new DataCloudflareAccountRolesResultPermissionsCachePurgeOutputReference(this, "cache_purge");
  public get cachePurge() {
    return this._cachePurge;
  }

  // dns - computed: true, optional: false, required: false
  private _dns = new DataCloudflareAccountRolesResultPermissionsDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }

  // dns_records - computed: true, optional: false, required: false
  private _dnsRecords = new DataCloudflareAccountRolesResultPermissionsDnsRecordsOutputReference(this, "dns_records");
  public get dnsRecords() {
    return this._dnsRecords;
  }

  // lb - computed: true, optional: false, required: false
  private _lb = new DataCloudflareAccountRolesResultPermissionsLbOutputReference(this, "lb");
  public get lb() {
    return this._lb;
  }

  // logs - computed: true, optional: false, required: false
  private _logs = new DataCloudflareAccountRolesResultPermissionsLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }

  // organization - computed: true, optional: false, required: false
  private _organization = new DataCloudflareAccountRolesResultPermissionsOrganizationOutputReference(this, "organization");
  public get organization() {
    return this._organization;
  }

  // ssl - computed: true, optional: false, required: false
  private _ssl = new DataCloudflareAccountRolesResultPermissionsSslOutputReference(this, "ssl");
  public get ssl() {
    return this._ssl;
  }

  // waf - computed: true, optional: false, required: false
  private _waf = new DataCloudflareAccountRolesResultPermissionsWafOutputReference(this, "waf");
  public get waf() {
    return this._waf;
  }

  // zone_settings - computed: true, optional: false, required: false
  private _zoneSettings = new DataCloudflareAccountRolesResultPermissionsZoneSettingsOutputReference(this, "zone_settings");
  public get zoneSettings() {
    return this._zoneSettings;
  }

  // zones - computed: true, optional: false, required: false
  private _zones = new DataCloudflareAccountRolesResultPermissionsZonesOutputReference(this, "zones");
  public get zones() {
    return this._zones;
  }
}
export interface DataCloudflareAccountRolesResult {
}

export function dataCloudflareAccountRolesResultToTerraform(struct?: DataCloudflareAccountRolesResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareAccountRolesResultToHclTerraform(struct?: DataCloudflareAccountRolesResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareAccountRolesResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareAccountRolesResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareAccountRolesResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataCloudflareAccountRolesResultPermissionsOutputReference(this, "permissions");
  public get permissions() {
    return this._permissions;
  }
}

export class DataCloudflareAccountRolesResultList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataCloudflareAccountRolesResultOutputReference {
    return new DataCloudflareAccountRolesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/account_roles cloudflare_account_roles}
*/
export class DataCloudflareAccountRoles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_account_roles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareAccountRoles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareAccountRoles to import
  * @param importFromId The id of the existing DataCloudflareAccountRoles that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/account_roles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareAccountRoles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_account_roles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/account_roles cloudflare_account_roles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareAccountRolesConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareAccountRolesConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_account_roles',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.1.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._maxItems = config.maxItems;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflareAccountRolesResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      max_items: cdktf.numberToTerraform(this._maxItems),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_items: {
        value: cdktf.numberToHclTerraform(this._maxItems),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
