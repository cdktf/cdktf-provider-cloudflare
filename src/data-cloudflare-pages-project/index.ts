/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/pages_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflarePagesProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/pages_project#account_id DataCloudflarePagesProject#account_id}
  */
  readonly accountId: string;
  /**
  * Name of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/pages_project#project_name DataCloudflarePagesProject#project_name}
  */
  readonly projectName: string;
}
export interface DataCloudflarePagesProjectBuildConfig {
}

export function dataCloudflarePagesProjectBuildConfigToTerraform(struct?: DataCloudflarePagesProjectBuildConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectBuildConfigToHclTerraform(struct?: DataCloudflarePagesProjectBuildConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectBuildConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectBuildConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectBuildConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build_caching - computed: true, optional: false, required: false
  public get buildCaching() {
    return this.getBooleanAttribute('build_caching');
  }

  // build_command - computed: true, optional: false, required: false
  public get buildCommand() {
    return this.getStringAttribute('build_command');
  }

  // destination_dir - computed: true, optional: false, required: false
  public get destinationDir() {
    return this.getStringAttribute('destination_dir');
  }

  // root_dir - computed: true, optional: false, required: false
  public get rootDir() {
    return this.getStringAttribute('root_dir');
  }

  // web_analytics_tag - computed: true, optional: false, required: false
  public get webAnalyticsTag() {
    return this.getStringAttribute('web_analytics_tag');
  }

  // web_analytics_token - computed: true, optional: false, required: false
  public get webAnalyticsToken() {
    return this.getStringAttribute('web_analytics_token');
  }
}
export interface DataCloudflarePagesProjectCanonicalDeploymentBuildConfig {
}

export function dataCloudflarePagesProjectCanonicalDeploymentBuildConfigToTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentBuildConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectCanonicalDeploymentBuildConfigToHclTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentBuildConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectCanonicalDeploymentBuildConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectCanonicalDeploymentBuildConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectCanonicalDeploymentBuildConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build_caching - computed: true, optional: false, required: false
  public get buildCaching() {
    return this.getBooleanAttribute('build_caching');
  }

  // build_command - computed: true, optional: false, required: false
  public get buildCommand() {
    return this.getStringAttribute('build_command');
  }

  // destination_dir - computed: true, optional: false, required: false
  public get destinationDir() {
    return this.getStringAttribute('destination_dir');
  }

  // root_dir - computed: true, optional: false, required: false
  public get rootDir() {
    return this.getStringAttribute('root_dir');
  }

  // web_analytics_tag - computed: true, optional: false, required: false
  public get webAnalyticsTag() {
    return this.getStringAttribute('web_analytics_tag');
  }

  // web_analytics_token - computed: true, optional: false, required: false
  public get webAnalyticsToken() {
    return this.getStringAttribute('web_analytics_token');
  }
}
export interface DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadata {
}

export function dataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataToTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataToHclTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // commit_hash - computed: true, optional: false, required: false
  public get commitHash() {
    return this.getStringAttribute('commit_hash');
  }

  // commit_message - computed: true, optional: false, required: false
  public get commitMessage() {
    return this.getStringAttribute('commit_message');
  }
}
export interface DataCloudflarePagesProjectCanonicalDeploymentDeploymentTrigger {
}

export function dataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerToTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentDeploymentTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerToHclTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentDeploymentTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectCanonicalDeploymentDeploymentTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectCanonicalDeploymentDeploymentTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCloudflarePagesProjectCanonicalDeploymentEnvVars {
}

export function dataCloudflarePagesProjectCanonicalDeploymentEnvVarsToTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectCanonicalDeploymentEnvVarsToHclTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectCanonicalDeploymentEnvVarsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectCanonicalDeploymentEnvVars | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectCanonicalDeploymentEnvVars | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCloudflarePagesProjectCanonicalDeploymentEnvVarsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectCanonicalDeploymentEnvVarsOutputReference {
    return new DataCloudflarePagesProjectCanonicalDeploymentEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectCanonicalDeploymentLatestStage {
}

export function dataCloudflarePagesProjectCanonicalDeploymentLatestStageToTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentLatestStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectCanonicalDeploymentLatestStageToHclTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentLatestStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectCanonicalDeploymentLatestStageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectCanonicalDeploymentLatestStage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectCanonicalDeploymentLatestStage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ended_on - computed: true, optional: false, required: false
  public get endedOn() {
    return this.getStringAttribute('ended_on');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // started_on - computed: true, optional: false, required: false
  public get startedOn() {
    return this.getStringAttribute('started_on');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataCloudflarePagesProjectCanonicalDeploymentSourceConfig {
}

export function dataCloudflarePagesProjectCanonicalDeploymentSourceConfigToTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectCanonicalDeploymentSourceConfigToHclTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectCanonicalDeploymentSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectCanonicalDeploymentSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployments_enabled - computed: true, optional: false, required: false
  public get deploymentsEnabled() {
    return this.getBooleanAttribute('deployments_enabled');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // path_excludes - computed: true, optional: false, required: false
  public get pathExcludes() {
    return this.getListAttribute('path_excludes');
  }

  // path_includes - computed: true, optional: false, required: false
  public get pathIncludes() {
    return this.getListAttribute('path_includes');
  }

  // pr_comments_enabled - computed: true, optional: false, required: false
  public get prCommentsEnabled() {
    return this.getBooleanAttribute('pr_comments_enabled');
  }

  // preview_branch_excludes - computed: true, optional: false, required: false
  public get previewBranchExcludes() {
    return this.getListAttribute('preview_branch_excludes');
  }

  // preview_branch_includes - computed: true, optional: false, required: false
  public get previewBranchIncludes() {
    return this.getListAttribute('preview_branch_includes');
  }

  // preview_deployment_setting - computed: true, optional: false, required: false
  public get previewDeploymentSetting() {
    return this.getStringAttribute('preview_deployment_setting');
  }

  // production_branch - computed: true, optional: false, required: false
  public get productionBranch() {
    return this.getStringAttribute('production_branch');
  }

  // production_deployments_enabled - computed: true, optional: false, required: false
  public get productionDeploymentsEnabled() {
    return this.getBooleanAttribute('production_deployments_enabled');
  }

  // repo_name - computed: true, optional: false, required: false
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
}
export interface DataCloudflarePagesProjectCanonicalDeploymentSource {
}

export function dataCloudflarePagesProjectCanonicalDeploymentSourceToTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectCanonicalDeploymentSourceToHclTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectCanonicalDeploymentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectCanonicalDeploymentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectCanonicalDeploymentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataCloudflarePagesProjectCanonicalDeploymentSourceConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCloudflarePagesProjectCanonicalDeploymentStages {
}

export function dataCloudflarePagesProjectCanonicalDeploymentStagesToTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectCanonicalDeploymentStagesToHclTerraform(struct?: DataCloudflarePagesProjectCanonicalDeploymentStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectCanonicalDeploymentStagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflarePagesProjectCanonicalDeploymentStages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectCanonicalDeploymentStages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ended_on - computed: true, optional: false, required: false
  public get endedOn() {
    return this.getStringAttribute('ended_on');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // started_on - computed: true, optional: false, required: false
  public get startedOn() {
    return this.getStringAttribute('started_on');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataCloudflarePagesProjectCanonicalDeploymentStagesList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflarePagesProjectCanonicalDeploymentStagesOutputReference {
    return new DataCloudflarePagesProjectCanonicalDeploymentStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflarePagesProjectCanonicalDeployment {
}

export function dataCloudflarePagesProjectCanonicalDeploymentToTerraform(struct?: DataCloudflarePagesProjectCanonicalDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectCanonicalDeploymentToHclTerraform(struct?: DataCloudflarePagesProjectCanonicalDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectCanonicalDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectCanonicalDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectCanonicalDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aliases - computed: true, optional: false, required: false
  public get aliases() {
    return this.getListAttribute('aliases');
  }

  // build_config - computed: true, optional: false, required: false
  private _buildConfig = new DataCloudflarePagesProjectCanonicalDeploymentBuildConfigOutputReference(this, "build_config");
  public get buildConfig() {
    return this._buildConfig;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // deployment_trigger - computed: true, optional: false, required: false
  private _deploymentTrigger = new DataCloudflarePagesProjectCanonicalDeploymentDeploymentTriggerOutputReference(this, "deployment_trigger");
  public get deploymentTrigger() {
    return this._deploymentTrigger;
  }

  // env_vars - computed: true, optional: false, required: false
  private _envVars = new DataCloudflarePagesProjectCanonicalDeploymentEnvVarsMap(this, "env_vars");
  public get envVars() {
    return this._envVars;
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_skipped - computed: true, optional: false, required: false
  public get isSkipped() {
    return this.getBooleanAttribute('is_skipped');
  }

  // latest_stage - computed: true, optional: false, required: false
  private _latestStage = new DataCloudflarePagesProjectCanonicalDeploymentLatestStageOutputReference(this, "latest_stage");
  public get latestStage() {
    return this._latestStage;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // short_id - computed: true, optional: false, required: false
  public get shortId() {
    return this.getStringAttribute('short_id');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataCloudflarePagesProjectCanonicalDeploymentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // stages - computed: true, optional: false, required: false
  private _stages = new DataCloudflarePagesProjectCanonicalDeploymentStagesList(this, "stages", false);
  public get stages() {
    return this._stages;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindings {
}

export function dataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets {
}

export function dataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataset - computed: true, optional: false, required: false
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsers {
}

export function dataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewD1Databases {
}

export function dataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewD1Databases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewD1Databases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewD1Databases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewD1Databases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespaces {
}

export function dataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVars {
}

export function dataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVars | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVars | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindings {
}

export function dataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespaces {
}

export function dataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificates {
}

export function dataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewPlacement {
}

export function dataCloudflarePagesProjectDeploymentConfigsPreviewPlacementToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsPreviewPlacementToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewPlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewPlacement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducers {
}

export function dataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewR2Buckets {
}

export function dataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewR2Buckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewR2Buckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewR2Buckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewR2Buckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // jurisdiction - computed: true, optional: false, required: false
  public get jurisdiction() {
    return this.getStringAttribute('jurisdiction');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewServices {
}

export function dataCloudflarePagesProjectDeploymentConfigsPreviewServicesToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsPreviewServicesToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entrypoint - computed: true, optional: false, required: false
  public get entrypoint() {
    return this.getStringAttribute('entrypoint');
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewServicesMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewServicesOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsPreviewServicesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindings {
}

export function dataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // index_name - computed: true, optional: false, required: false
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsPreview {
}

export function dataCloudflarePagesProjectDeploymentConfigsPreviewToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreview): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsPreviewToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsPreview): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsPreview | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsPreview | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ai_bindings - computed: true, optional: false, required: false
  private _aiBindings = new DataCloudflarePagesProjectDeploymentConfigsPreviewAiBindingsMap(this, "ai_bindings");
  public get aiBindings() {
    return this._aiBindings;
  }

  // analytics_engine_datasets - computed: true, optional: false, required: false
  private _analyticsEngineDatasets = new DataCloudflarePagesProjectDeploymentConfigsPreviewAnalyticsEngineDatasetsMap(this, "analytics_engine_datasets");
  public get analyticsEngineDatasets() {
    return this._analyticsEngineDatasets;
  }

  // browsers - computed: true, optional: false, required: false
  private _browsers = new DataCloudflarePagesProjectDeploymentConfigsPreviewBrowsersMap(this, "browsers");
  public get browsers() {
    return this._browsers;
  }

  // compatibility_date - computed: true, optional: false, required: false
  public get compatibilityDate() {
    return this.getStringAttribute('compatibility_date');
  }

  // compatibility_flags - computed: true, optional: false, required: false
  public get compatibilityFlags() {
    return this.getListAttribute('compatibility_flags');
  }

  // d1_databases - computed: true, optional: false, required: false
  private _d1Databases = new DataCloudflarePagesProjectDeploymentConfigsPreviewD1DatabasesMap(this, "d1_databases");
  public get d1Databases() {
    return this._d1Databases;
  }

  // durable_object_namespaces - computed: true, optional: false, required: false
  private _durableObjectNamespaces = new DataCloudflarePagesProjectDeploymentConfigsPreviewDurableObjectNamespacesMap(this, "durable_object_namespaces");
  public get durableObjectNamespaces() {
    return this._durableObjectNamespaces;
  }

  // env_vars - computed: true, optional: false, required: false
  private _envVars = new DataCloudflarePagesProjectDeploymentConfigsPreviewEnvVarsMap(this, "env_vars");
  public get envVars() {
    return this._envVars;
  }

  // hyperdrive_bindings - computed: true, optional: false, required: false
  private _hyperdriveBindings = new DataCloudflarePagesProjectDeploymentConfigsPreviewHyperdriveBindingsMap(this, "hyperdrive_bindings");
  public get hyperdriveBindings() {
    return this._hyperdriveBindings;
  }

  // kv_namespaces - computed: true, optional: false, required: false
  private _kvNamespaces = new DataCloudflarePagesProjectDeploymentConfigsPreviewKvNamespacesMap(this, "kv_namespaces");
  public get kvNamespaces() {
    return this._kvNamespaces;
  }

  // mtls_certificates - computed: true, optional: false, required: false
  private _mtlsCertificates = new DataCloudflarePagesProjectDeploymentConfigsPreviewMtlsCertificatesMap(this, "mtls_certificates");
  public get mtlsCertificates() {
    return this._mtlsCertificates;
  }

  // placement - computed: true, optional: false, required: false
  private _placement = new DataCloudflarePagesProjectDeploymentConfigsPreviewPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }

  // queue_producers - computed: true, optional: false, required: false
  private _queueProducers = new DataCloudflarePagesProjectDeploymentConfigsPreviewQueueProducersMap(this, "queue_producers");
  public get queueProducers() {
    return this._queueProducers;
  }

  // r2_buckets - computed: true, optional: false, required: false
  private _r2Buckets = new DataCloudflarePagesProjectDeploymentConfigsPreviewR2BucketsMap(this, "r2_buckets");
  public get r2Buckets() {
    return this._r2Buckets;
  }

  // services - computed: true, optional: false, required: false
  private _services = new DataCloudflarePagesProjectDeploymentConfigsPreviewServicesMap(this, "services");
  public get services() {
    return this._services;
  }

  // vectorize_bindings - computed: true, optional: false, required: false
  private _vectorizeBindings = new DataCloudflarePagesProjectDeploymentConfigsPreviewVectorizeBindingsMap(this, "vectorize_bindings");
  public get vectorizeBindings() {
    return this._vectorizeBindings;
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionAiBindings {
}

export function dataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionAiBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionAiBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionAiBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionAiBindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets {
}

export function dataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataset - computed: true, optional: false, required: false
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionBrowsers {
}

export function dataCloudflarePagesProjectDeploymentConfigsProductionBrowsersToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionBrowsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsProductionBrowsersToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionBrowsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionBrowsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionBrowsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionD1Databases {
}

export function dataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionD1Databases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionD1Databases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionD1Databases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionD1Databases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespaces {
}

export function dataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionEnvVars {
}

export function dataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionEnvVars | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionEnvVars | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindings {
}

export function dataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespaces {
}

export function dataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificates {
}

export function dataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionPlacement {
}

export function dataCloudflarePagesProjectDeploymentConfigsProductionPlacementToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsProductionPlacementToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionPlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionPlacement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducers {
}

export function dataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionR2Buckets {
}

export function dataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionR2Buckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionR2Buckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionR2Buckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionR2Buckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // jurisdiction - computed: true, optional: false, required: false
  public get jurisdiction() {
    return this.getStringAttribute('jurisdiction');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionServices {
}

export function dataCloudflarePagesProjectDeploymentConfigsProductionServicesToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsProductionServicesToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entrypoint - computed: true, optional: false, required: false
  public get entrypoint() {
    return this.getStringAttribute('entrypoint');
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionServicesMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionServicesOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsProductionServicesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindings {
}

export function dataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // index_name - computed: true, optional: false, required: false
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference {
    return new DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigsProduction {
}

export function dataCloudflarePagesProjectDeploymentConfigsProductionToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProduction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsProductionToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigsProduction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigsProduction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigsProduction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ai_bindings - computed: true, optional: false, required: false
  private _aiBindings = new DataCloudflarePagesProjectDeploymentConfigsProductionAiBindingsMap(this, "ai_bindings");
  public get aiBindings() {
    return this._aiBindings;
  }

  // analytics_engine_datasets - computed: true, optional: false, required: false
  private _analyticsEngineDatasets = new DataCloudflarePagesProjectDeploymentConfigsProductionAnalyticsEngineDatasetsMap(this, "analytics_engine_datasets");
  public get analyticsEngineDatasets() {
    return this._analyticsEngineDatasets;
  }

  // browsers - computed: true, optional: false, required: false
  private _browsers = new DataCloudflarePagesProjectDeploymentConfigsProductionBrowsersMap(this, "browsers");
  public get browsers() {
    return this._browsers;
  }

  // compatibility_date - computed: true, optional: false, required: false
  public get compatibilityDate() {
    return this.getStringAttribute('compatibility_date');
  }

  // compatibility_flags - computed: true, optional: false, required: false
  public get compatibilityFlags() {
    return this.getListAttribute('compatibility_flags');
  }

  // d1_databases - computed: true, optional: false, required: false
  private _d1Databases = new DataCloudflarePagesProjectDeploymentConfigsProductionD1DatabasesMap(this, "d1_databases");
  public get d1Databases() {
    return this._d1Databases;
  }

  // durable_object_namespaces - computed: true, optional: false, required: false
  private _durableObjectNamespaces = new DataCloudflarePagesProjectDeploymentConfigsProductionDurableObjectNamespacesMap(this, "durable_object_namespaces");
  public get durableObjectNamespaces() {
    return this._durableObjectNamespaces;
  }

  // env_vars - computed: true, optional: false, required: false
  private _envVars = new DataCloudflarePagesProjectDeploymentConfigsProductionEnvVarsMap(this, "env_vars");
  public get envVars() {
    return this._envVars;
  }

  // hyperdrive_bindings - computed: true, optional: false, required: false
  private _hyperdriveBindings = new DataCloudflarePagesProjectDeploymentConfigsProductionHyperdriveBindingsMap(this, "hyperdrive_bindings");
  public get hyperdriveBindings() {
    return this._hyperdriveBindings;
  }

  // kv_namespaces - computed: true, optional: false, required: false
  private _kvNamespaces = new DataCloudflarePagesProjectDeploymentConfigsProductionKvNamespacesMap(this, "kv_namespaces");
  public get kvNamespaces() {
    return this._kvNamespaces;
  }

  // mtls_certificates - computed: true, optional: false, required: false
  private _mtlsCertificates = new DataCloudflarePagesProjectDeploymentConfigsProductionMtlsCertificatesMap(this, "mtls_certificates");
  public get mtlsCertificates() {
    return this._mtlsCertificates;
  }

  // placement - computed: true, optional: false, required: false
  private _placement = new DataCloudflarePagesProjectDeploymentConfigsProductionPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }

  // queue_producers - computed: true, optional: false, required: false
  private _queueProducers = new DataCloudflarePagesProjectDeploymentConfigsProductionQueueProducersMap(this, "queue_producers");
  public get queueProducers() {
    return this._queueProducers;
  }

  // r2_buckets - computed: true, optional: false, required: false
  private _r2Buckets = new DataCloudflarePagesProjectDeploymentConfigsProductionR2BucketsMap(this, "r2_buckets");
  public get r2Buckets() {
    return this._r2Buckets;
  }

  // services - computed: true, optional: false, required: false
  private _services = new DataCloudflarePagesProjectDeploymentConfigsProductionServicesMap(this, "services");
  public get services() {
    return this._services;
  }

  // vectorize_bindings - computed: true, optional: false, required: false
  private _vectorizeBindings = new DataCloudflarePagesProjectDeploymentConfigsProductionVectorizeBindingsMap(this, "vectorize_bindings");
  public get vectorizeBindings() {
    return this._vectorizeBindings;
  }
}
export interface DataCloudflarePagesProjectDeploymentConfigs {
}

export function dataCloudflarePagesProjectDeploymentConfigsToTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectDeploymentConfigsToHclTerraform(struct?: DataCloudflarePagesProjectDeploymentConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectDeploymentConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectDeploymentConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectDeploymentConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preview - computed: true, optional: false, required: false
  private _preview = new DataCloudflarePagesProjectDeploymentConfigsPreviewOutputReference(this, "preview");
  public get preview() {
    return this._preview;
  }

  // production - computed: true, optional: false, required: false
  private _production = new DataCloudflarePagesProjectDeploymentConfigsProductionOutputReference(this, "production");
  public get production() {
    return this._production;
  }
}
export interface DataCloudflarePagesProjectLatestDeploymentBuildConfig {
}

export function dataCloudflarePagesProjectLatestDeploymentBuildConfigToTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentBuildConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectLatestDeploymentBuildConfigToHclTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentBuildConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectLatestDeploymentBuildConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectLatestDeploymentBuildConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectLatestDeploymentBuildConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build_caching - computed: true, optional: false, required: false
  public get buildCaching() {
    return this.getBooleanAttribute('build_caching');
  }

  // build_command - computed: true, optional: false, required: false
  public get buildCommand() {
    return this.getStringAttribute('build_command');
  }

  // destination_dir - computed: true, optional: false, required: false
  public get destinationDir() {
    return this.getStringAttribute('destination_dir');
  }

  // root_dir - computed: true, optional: false, required: false
  public get rootDir() {
    return this.getStringAttribute('root_dir');
  }

  // web_analytics_tag - computed: true, optional: false, required: false
  public get webAnalyticsTag() {
    return this.getStringAttribute('web_analytics_tag');
  }

  // web_analytics_token - computed: true, optional: false, required: false
  public get webAnalyticsToken() {
    return this.getStringAttribute('web_analytics_token');
  }
}
export interface DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadata {
}

export function dataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataToTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataToHclTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // commit_hash - computed: true, optional: false, required: false
  public get commitHash() {
    return this.getStringAttribute('commit_hash');
  }

  // commit_message - computed: true, optional: false, required: false
  public get commitMessage() {
    return this.getStringAttribute('commit_message');
  }
}
export interface DataCloudflarePagesProjectLatestDeploymentDeploymentTrigger {
}

export function dataCloudflarePagesProjectLatestDeploymentDeploymentTriggerToTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentDeploymentTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectLatestDeploymentDeploymentTriggerToHclTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentDeploymentTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectLatestDeploymentDeploymentTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectLatestDeploymentDeploymentTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCloudflarePagesProjectLatestDeploymentEnvVars {
}

export function dataCloudflarePagesProjectLatestDeploymentEnvVarsToTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectLatestDeploymentEnvVarsToHclTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectLatestDeploymentEnvVarsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectLatestDeploymentEnvVars | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectLatestDeploymentEnvVars | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCloudflarePagesProjectLatestDeploymentEnvVarsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataCloudflarePagesProjectLatestDeploymentEnvVarsOutputReference {
    return new DataCloudflarePagesProjectLatestDeploymentEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectLatestDeploymentLatestStage {
}

export function dataCloudflarePagesProjectLatestDeploymentLatestStageToTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentLatestStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectLatestDeploymentLatestStageToHclTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentLatestStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectLatestDeploymentLatestStageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectLatestDeploymentLatestStage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectLatestDeploymentLatestStage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ended_on - computed: true, optional: false, required: false
  public get endedOn() {
    return this.getStringAttribute('ended_on');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // started_on - computed: true, optional: false, required: false
  public get startedOn() {
    return this.getStringAttribute('started_on');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataCloudflarePagesProjectLatestDeploymentSourceConfig {
}

export function dataCloudflarePagesProjectLatestDeploymentSourceConfigToTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectLatestDeploymentSourceConfigToHclTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectLatestDeploymentSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectLatestDeploymentSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployments_enabled - computed: true, optional: false, required: false
  public get deploymentsEnabled() {
    return this.getBooleanAttribute('deployments_enabled');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // path_excludes - computed: true, optional: false, required: false
  public get pathExcludes() {
    return this.getListAttribute('path_excludes');
  }

  // path_includes - computed: true, optional: false, required: false
  public get pathIncludes() {
    return this.getListAttribute('path_includes');
  }

  // pr_comments_enabled - computed: true, optional: false, required: false
  public get prCommentsEnabled() {
    return this.getBooleanAttribute('pr_comments_enabled');
  }

  // preview_branch_excludes - computed: true, optional: false, required: false
  public get previewBranchExcludes() {
    return this.getListAttribute('preview_branch_excludes');
  }

  // preview_branch_includes - computed: true, optional: false, required: false
  public get previewBranchIncludes() {
    return this.getListAttribute('preview_branch_includes');
  }

  // preview_deployment_setting - computed: true, optional: false, required: false
  public get previewDeploymentSetting() {
    return this.getStringAttribute('preview_deployment_setting');
  }

  // production_branch - computed: true, optional: false, required: false
  public get productionBranch() {
    return this.getStringAttribute('production_branch');
  }

  // production_deployments_enabled - computed: true, optional: false, required: false
  public get productionDeploymentsEnabled() {
    return this.getBooleanAttribute('production_deployments_enabled');
  }

  // repo_name - computed: true, optional: false, required: false
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
}
export interface DataCloudflarePagesProjectLatestDeploymentSource {
}

export function dataCloudflarePagesProjectLatestDeploymentSourceToTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectLatestDeploymentSourceToHclTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectLatestDeploymentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectLatestDeploymentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectLatestDeploymentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataCloudflarePagesProjectLatestDeploymentSourceConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCloudflarePagesProjectLatestDeploymentStages {
}

export function dataCloudflarePagesProjectLatestDeploymentStagesToTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectLatestDeploymentStagesToHclTerraform(struct?: DataCloudflarePagesProjectLatestDeploymentStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectLatestDeploymentStagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflarePagesProjectLatestDeploymentStages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectLatestDeploymentStages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ended_on - computed: true, optional: false, required: false
  public get endedOn() {
    return this.getStringAttribute('ended_on');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // started_on - computed: true, optional: false, required: false
  public get startedOn() {
    return this.getStringAttribute('started_on');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataCloudflarePagesProjectLatestDeploymentStagesList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflarePagesProjectLatestDeploymentStagesOutputReference {
    return new DataCloudflarePagesProjectLatestDeploymentStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflarePagesProjectLatestDeployment {
}

export function dataCloudflarePagesProjectLatestDeploymentToTerraform(struct?: DataCloudflarePagesProjectLatestDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectLatestDeploymentToHclTerraform(struct?: DataCloudflarePagesProjectLatestDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectLatestDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectLatestDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectLatestDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aliases - computed: true, optional: false, required: false
  public get aliases() {
    return this.getListAttribute('aliases');
  }

  // build_config - computed: true, optional: false, required: false
  private _buildConfig = new DataCloudflarePagesProjectLatestDeploymentBuildConfigOutputReference(this, "build_config");
  public get buildConfig() {
    return this._buildConfig;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // deployment_trigger - computed: true, optional: false, required: false
  private _deploymentTrigger = new DataCloudflarePagesProjectLatestDeploymentDeploymentTriggerOutputReference(this, "deployment_trigger");
  public get deploymentTrigger() {
    return this._deploymentTrigger;
  }

  // env_vars - computed: true, optional: false, required: false
  private _envVars = new DataCloudflarePagesProjectLatestDeploymentEnvVarsMap(this, "env_vars");
  public get envVars() {
    return this._envVars;
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_skipped - computed: true, optional: false, required: false
  public get isSkipped() {
    return this.getBooleanAttribute('is_skipped');
  }

  // latest_stage - computed: true, optional: false, required: false
  private _latestStage = new DataCloudflarePagesProjectLatestDeploymentLatestStageOutputReference(this, "latest_stage");
  public get latestStage() {
    return this._latestStage;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // short_id - computed: true, optional: false, required: false
  public get shortId() {
    return this.getStringAttribute('short_id');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataCloudflarePagesProjectLatestDeploymentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // stages - computed: true, optional: false, required: false
  private _stages = new DataCloudflarePagesProjectLatestDeploymentStagesList(this, "stages", false);
  public get stages() {
    return this._stages;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataCloudflarePagesProjectSourceConfig {
}

export function dataCloudflarePagesProjectSourceConfigToTerraform(struct?: DataCloudflarePagesProjectSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectSourceConfigToHclTerraform(struct?: DataCloudflarePagesProjectSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployments_enabled - computed: true, optional: false, required: false
  public get deploymentsEnabled() {
    return this.getBooleanAttribute('deployments_enabled');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // path_excludes - computed: true, optional: false, required: false
  public get pathExcludes() {
    return this.getListAttribute('path_excludes');
  }

  // path_includes - computed: true, optional: false, required: false
  public get pathIncludes() {
    return this.getListAttribute('path_includes');
  }

  // pr_comments_enabled - computed: true, optional: false, required: false
  public get prCommentsEnabled() {
    return this.getBooleanAttribute('pr_comments_enabled');
  }

  // preview_branch_excludes - computed: true, optional: false, required: false
  public get previewBranchExcludes() {
    return this.getListAttribute('preview_branch_excludes');
  }

  // preview_branch_includes - computed: true, optional: false, required: false
  public get previewBranchIncludes() {
    return this.getListAttribute('preview_branch_includes');
  }

  // preview_deployment_setting - computed: true, optional: false, required: false
  public get previewDeploymentSetting() {
    return this.getStringAttribute('preview_deployment_setting');
  }

  // production_branch - computed: true, optional: false, required: false
  public get productionBranch() {
    return this.getStringAttribute('production_branch');
  }

  // production_deployments_enabled - computed: true, optional: false, required: false
  public get productionDeploymentsEnabled() {
    return this.getBooleanAttribute('production_deployments_enabled');
  }

  // repo_name - computed: true, optional: false, required: false
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
}
export interface DataCloudflarePagesProjectSource {
}

export function dataCloudflarePagesProjectSourceToTerraform(struct?: DataCloudflarePagesProjectSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectSourceToHclTerraform(struct?: DataCloudflarePagesProjectSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataCloudflarePagesProjectSourceConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/pages_project cloudflare_pages_project}
*/
export class DataCloudflarePagesProject extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_pages_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflarePagesProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflarePagesProject to import
  * @param importFromId The id of the existing DataCloudflarePagesProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/pages_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflarePagesProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_pages_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/pages_project cloudflare_pages_project} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflarePagesProjectConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflarePagesProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_pages_project',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.8.2',
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
    this._projectName = config.projectName;
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

  // build_config - computed: true, optional: false, required: false
  private _buildConfig = new DataCloudflarePagesProjectBuildConfigOutputReference(this, "build_config");
  public get buildConfig() {
    return this._buildConfig;
  }

  // canonical_deployment - computed: true, optional: false, required: false
  private _canonicalDeployment = new DataCloudflarePagesProjectCanonicalDeploymentOutputReference(this, "canonical_deployment");
  public get canonicalDeployment() {
    return this._canonicalDeployment;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // deployment_configs - computed: true, optional: false, required: false
  private _deploymentConfigs = new DataCloudflarePagesProjectDeploymentConfigsOutputReference(this, "deployment_configs");
  public get deploymentConfigs() {
    return this._deploymentConfigs;
  }

  // domains - computed: true, optional: false, required: false
  public get domains() {
    return this.getListAttribute('domains');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // latest_deployment - computed: true, optional: false, required: false
  private _latestDeployment = new DataCloudflarePagesProjectLatestDeploymentOutputReference(this, "latest_deployment");
  public get latestDeployment() {
    return this._latestDeployment;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // production_branch - computed: true, optional: false, required: false
  public get productionBranch() {
    return this.getStringAttribute('production_branch');
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataCloudflarePagesProjectSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      project_name: cdktf.stringToTerraform(this._projectName),
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
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
