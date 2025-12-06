/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/pages_projects
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflarePagesProjectsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/pages_projects#account_id DataCloudflarePagesProjects#account_id}
  */
  readonly accountId: string;
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/pages_projects#max_items DataCloudflarePagesProjects#max_items}
  */
  readonly maxItems?: number;
}
export interface DataCloudflarePagesProjectsResultBuildConfig {
}

export function dataCloudflarePagesProjectsResultBuildConfigToTerraform(struct?: DataCloudflarePagesProjectsResultBuildConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultBuildConfigToHclTerraform(struct?: DataCloudflarePagesProjectsResultBuildConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultBuildConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultBuildConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultBuildConfig | undefined) {
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
export interface DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfig {
}

export function dataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigToTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigToHclTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfig | undefined) {
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
export interface DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadata {
}

export function dataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataToTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataToHclTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadata | undefined) {
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

  // commit_dirty - computed: true, optional: false, required: false
  public get commitDirty() {
    return this.getBooleanAttribute('commit_dirty');
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
export interface DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTrigger {
}

export function dataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerToTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerToHclTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVars {
}

export function dataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsToTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsToHclTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVars | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVars | undefined) {
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

export class DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsOutputReference {
    return new DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStage {
}

export function dataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageToTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageToHclTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStage | undefined) {
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
export interface DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfig {
}

export function dataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigToTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigToHclTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfig | undefined) {
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

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
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

  // repo_id - computed: true, optional: false, required: false
  public get repoId() {
    return this.getStringAttribute('repo_id');
  }

  // repo_name - computed: true, optional: false, required: false
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
}
export interface DataCloudflarePagesProjectsResultCanonicalDeploymentSource {
}

export function dataCloudflarePagesProjectsResultCanonicalDeploymentSourceToTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultCanonicalDeploymentSourceToHclTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultCanonicalDeploymentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultCanonicalDeploymentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultCanonicalDeploymentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataCloudflarePagesProjectsResultCanonicalDeploymentSourceConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCloudflarePagesProjectsResultCanonicalDeploymentStages {
}

export function dataCloudflarePagesProjectsResultCanonicalDeploymentStagesToTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultCanonicalDeploymentStagesToHclTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeploymentStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultCanonicalDeploymentStagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflarePagesProjectsResultCanonicalDeploymentStages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultCanonicalDeploymentStages | undefined) {
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

export class DataCloudflarePagesProjectsResultCanonicalDeploymentStagesList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflarePagesProjectsResultCanonicalDeploymentStagesOutputReference {
    return new DataCloudflarePagesProjectsResultCanonicalDeploymentStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflarePagesProjectsResultCanonicalDeployment {
}

export function dataCloudflarePagesProjectsResultCanonicalDeploymentToTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultCanonicalDeploymentToHclTerraform(struct?: DataCloudflarePagesProjectsResultCanonicalDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultCanonicalDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultCanonicalDeployment | undefined) {
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
  private _buildConfig = new DataCloudflarePagesProjectsResultCanonicalDeploymentBuildConfigOutputReference(this, "build_config");
  public get buildConfig() {
    return this._buildConfig;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // deployment_trigger - computed: true, optional: false, required: false
  private _deploymentTrigger = new DataCloudflarePagesProjectsResultCanonicalDeploymentDeploymentTriggerOutputReference(this, "deployment_trigger");
  public get deploymentTrigger() {
    return this._deploymentTrigger;
  }

  // env_vars - computed: true, optional: false, required: false
  private _envVars = new DataCloudflarePagesProjectsResultCanonicalDeploymentEnvVarsMap(this, "env_vars");
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
  private _latestStage = new DataCloudflarePagesProjectsResultCanonicalDeploymentLatestStageOutputReference(this, "latest_stage");
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
  private _source = new DataCloudflarePagesProjectsResultCanonicalDeploymentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // stages - computed: true, optional: false, required: false
  private _stages = new DataCloudflarePagesProjectsResultCanonicalDeploymentStagesList(this, "stages", false);
  public get stages() {
    return this._stages;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // uses_functions - computed: true, optional: false, required: false
  public get usesFunctions() {
    return this.getBooleanAttribute('uses_functions');
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindings {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindings | undefined) {
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

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasets {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasets | undefined) {
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

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsers {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1Databases {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1Databases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1Databases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1Databases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1Databases | undefined) {
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

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespaces {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespaces | undefined) {
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

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVars {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVars | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVars | undefined) {
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

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindings {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindings | undefined) {
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

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespaces {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespaces | undefined) {
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

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimits {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimitsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimitsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_ms - computed: true, optional: false, required: false
  public get cpuMs() {
    return this.getNumberAttribute('cpu_ms');
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificates {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificates | undefined) {
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

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacement {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacementToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacementToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacement | undefined) {
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
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducers {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducers | undefined) {
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

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2Buckets {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2Buckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2Buckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2Buckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2Buckets | undefined) {
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

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServices {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServices | undefined) {
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

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindings {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindings | undefined) {
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

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsPreview {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreview): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsPreviewToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsPreview): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsPreview | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsPreview | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ai_bindings - computed: true, optional: false, required: false
  private _aiBindings = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAiBindingsMap(this, "ai_bindings");
  public get aiBindings() {
    return this._aiBindings;
  }

  // always_use_latest_compatibility_date - computed: true, optional: false, required: false
  public get alwaysUseLatestCompatibilityDate() {
    return this.getBooleanAttribute('always_use_latest_compatibility_date');
  }

  // analytics_engine_datasets - computed: true, optional: false, required: false
  private _analyticsEngineDatasets = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewAnalyticsEngineDatasetsMap(this, "analytics_engine_datasets");
  public get analyticsEngineDatasets() {
    return this._analyticsEngineDatasets;
  }

  // browsers - computed: true, optional: false, required: false
  private _browsers = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewBrowsersMap(this, "browsers");
  public get browsers() {
    return this._browsers;
  }

  // build_image_major_version - computed: true, optional: false, required: false
  public get buildImageMajorVersion() {
    return this.getNumberAttribute('build_image_major_version');
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
  private _d1Databases = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewD1DatabasesMap(this, "d1_databases");
  public get d1Databases() {
    return this._d1Databases;
  }

  // durable_object_namespaces - computed: true, optional: false, required: false
  private _durableObjectNamespaces = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewDurableObjectNamespacesMap(this, "durable_object_namespaces");
  public get durableObjectNamespaces() {
    return this._durableObjectNamespaces;
  }

  // env_vars - computed: true, optional: false, required: false
  private _envVars = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewEnvVarsMap(this, "env_vars");
  public get envVars() {
    return this._envVars;
  }

  // fail_open - computed: true, optional: false, required: false
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }

  // hyperdrive_bindings - computed: true, optional: false, required: false
  private _hyperdriveBindings = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewHyperdriveBindingsMap(this, "hyperdrive_bindings");
  public get hyperdriveBindings() {
    return this._hyperdriveBindings;
  }

  // kv_namespaces - computed: true, optional: false, required: false
  private _kvNamespaces = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewKvNamespacesMap(this, "kv_namespaces");
  public get kvNamespaces() {
    return this._kvNamespaces;
  }

  // limits - computed: true, optional: false, required: false
  private _limits = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }

  // mtls_certificates - computed: true, optional: false, required: false
  private _mtlsCertificates = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewMtlsCertificatesMap(this, "mtls_certificates");
  public get mtlsCertificates() {
    return this._mtlsCertificates;
  }

  // placement - computed: true, optional: false, required: false
  private _placement = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }

  // queue_producers - computed: true, optional: false, required: false
  private _queueProducers = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewQueueProducersMap(this, "queue_producers");
  public get queueProducers() {
    return this._queueProducers;
  }

  // r2_buckets - computed: true, optional: false, required: false
  private _r2Buckets = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewR2BucketsMap(this, "r2_buckets");
  public get r2Buckets() {
    return this._r2Buckets;
  }

  // services - computed: true, optional: false, required: false
  private _services = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewServicesMap(this, "services");
  public get services() {
    return this._services;
  }

  // usage_model - computed: true, optional: false, required: false
  public get usageModel() {
    return this.getStringAttribute('usage_model');
  }

  // vectorize_bindings - computed: true, optional: false, required: false
  private _vectorizeBindings = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewVectorizeBindingsMap(this, "vectorize_bindings");
  public get vectorizeBindings() {
    return this._vectorizeBindings;
  }

  // wrangler_config_hash - computed: true, optional: false, required: false
  public get wranglerConfigHash() {
    return this.getStringAttribute('wrangler_config_hash');
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindings {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindings | undefined) {
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

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasets {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasets | undefined) {
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

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsers {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1Databases {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1Databases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1Databases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1Databases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1Databases | undefined) {
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

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespaces {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespaces | undefined) {
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

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVars {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVars | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVars | undefined) {
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

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindings {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindings | undefined) {
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

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespaces {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespaces | undefined) {
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

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionLimits {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionLimitsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionLimitsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_ms - computed: true, optional: false, required: false
  public get cpuMs() {
    return this.getNumberAttribute('cpu_ms');
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificates {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificates | undefined) {
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

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacement {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacementToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacementToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacement | undefined) {
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
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducers {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducers | undefined) {
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

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2Buckets {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2Buckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2Buckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2Buckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2Buckets | undefined) {
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

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionServices {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionServices | undefined) {
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

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindings {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindings | undefined) {
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

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsOutputReference {
    return new DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigsProduction {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProduction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsProductionToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigsProduction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigsProduction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigsProduction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ai_bindings - computed: true, optional: false, required: false
  private _aiBindings = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionAiBindingsMap(this, "ai_bindings");
  public get aiBindings() {
    return this._aiBindings;
  }

  // always_use_latest_compatibility_date - computed: true, optional: false, required: false
  public get alwaysUseLatestCompatibilityDate() {
    return this.getBooleanAttribute('always_use_latest_compatibility_date');
  }

  // analytics_engine_datasets - computed: true, optional: false, required: false
  private _analyticsEngineDatasets = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionAnalyticsEngineDatasetsMap(this, "analytics_engine_datasets");
  public get analyticsEngineDatasets() {
    return this._analyticsEngineDatasets;
  }

  // browsers - computed: true, optional: false, required: false
  private _browsers = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionBrowsersMap(this, "browsers");
  public get browsers() {
    return this._browsers;
  }

  // build_image_major_version - computed: true, optional: false, required: false
  public get buildImageMajorVersion() {
    return this.getNumberAttribute('build_image_major_version');
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
  private _d1Databases = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionD1DatabasesMap(this, "d1_databases");
  public get d1Databases() {
    return this._d1Databases;
  }

  // durable_object_namespaces - computed: true, optional: false, required: false
  private _durableObjectNamespaces = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionDurableObjectNamespacesMap(this, "durable_object_namespaces");
  public get durableObjectNamespaces() {
    return this._durableObjectNamespaces;
  }

  // env_vars - computed: true, optional: false, required: false
  private _envVars = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionEnvVarsMap(this, "env_vars");
  public get envVars() {
    return this._envVars;
  }

  // fail_open - computed: true, optional: false, required: false
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }

  // hyperdrive_bindings - computed: true, optional: false, required: false
  private _hyperdriveBindings = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionHyperdriveBindingsMap(this, "hyperdrive_bindings");
  public get hyperdriveBindings() {
    return this._hyperdriveBindings;
  }

  // kv_namespaces - computed: true, optional: false, required: false
  private _kvNamespaces = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionKvNamespacesMap(this, "kv_namespaces");
  public get kvNamespaces() {
    return this._kvNamespaces;
  }

  // limits - computed: true, optional: false, required: false
  private _limits = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }

  // mtls_certificates - computed: true, optional: false, required: false
  private _mtlsCertificates = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionMtlsCertificatesMap(this, "mtls_certificates");
  public get mtlsCertificates() {
    return this._mtlsCertificates;
  }

  // placement - computed: true, optional: false, required: false
  private _placement = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }

  // queue_producers - computed: true, optional: false, required: false
  private _queueProducers = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionQueueProducersMap(this, "queue_producers");
  public get queueProducers() {
    return this._queueProducers;
  }

  // r2_buckets - computed: true, optional: false, required: false
  private _r2Buckets = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionR2BucketsMap(this, "r2_buckets");
  public get r2Buckets() {
    return this._r2Buckets;
  }

  // services - computed: true, optional: false, required: false
  private _services = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionServicesMap(this, "services");
  public get services() {
    return this._services;
  }

  // usage_model - computed: true, optional: false, required: false
  public get usageModel() {
    return this.getStringAttribute('usage_model');
  }

  // vectorize_bindings - computed: true, optional: false, required: false
  private _vectorizeBindings = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionVectorizeBindingsMap(this, "vectorize_bindings");
  public get vectorizeBindings() {
    return this._vectorizeBindings;
  }

  // wrangler_config_hash - computed: true, optional: false, required: false
  public get wranglerConfigHash() {
    return this.getStringAttribute('wrangler_config_hash');
  }
}
export interface DataCloudflarePagesProjectsResultDeploymentConfigs {
}

export function dataCloudflarePagesProjectsResultDeploymentConfigsToTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultDeploymentConfigsToHclTerraform(struct?: DataCloudflarePagesProjectsResultDeploymentConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultDeploymentConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultDeploymentConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultDeploymentConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preview - computed: true, optional: false, required: false
  private _preview = new DataCloudflarePagesProjectsResultDeploymentConfigsPreviewOutputReference(this, "preview");
  public get preview() {
    return this._preview;
  }

  // production - computed: true, optional: false, required: false
  private _production = new DataCloudflarePagesProjectsResultDeploymentConfigsProductionOutputReference(this, "production");
  public get production() {
    return this._production;
  }
}
export interface DataCloudflarePagesProjectsResultLatestDeploymentBuildConfig {
}

export function dataCloudflarePagesProjectsResultLatestDeploymentBuildConfigToTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentBuildConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultLatestDeploymentBuildConfigToHclTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentBuildConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultLatestDeploymentBuildConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultLatestDeploymentBuildConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultLatestDeploymentBuildConfig | undefined) {
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
export interface DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadata {
}

export function dataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataToTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataToHclTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadata | undefined) {
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

  // commit_dirty - computed: true, optional: false, required: false
  public get commitDirty() {
    return this.getBooleanAttribute('commit_dirty');
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
export interface DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTrigger {
}

export function dataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerToTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerToHclTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCloudflarePagesProjectsResultLatestDeploymentEnvVars {
}

export function dataCloudflarePagesProjectsResultLatestDeploymentEnvVarsToTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultLatestDeploymentEnvVarsToHclTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentEnvVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultLatestDeploymentEnvVars | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultLatestDeploymentEnvVars | undefined) {
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

export class DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsMap extends cdktf.ComplexMap {

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
  public get(key: string): DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsOutputReference {
    return new DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataCloudflarePagesProjectsResultLatestDeploymentLatestStage {
}

export function dataCloudflarePagesProjectsResultLatestDeploymentLatestStageToTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentLatestStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultLatestDeploymentLatestStageToHclTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentLatestStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultLatestDeploymentLatestStageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultLatestDeploymentLatestStage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultLatestDeploymentLatestStage | undefined) {
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
export interface DataCloudflarePagesProjectsResultLatestDeploymentSourceConfig {
}

export function dataCloudflarePagesProjectsResultLatestDeploymentSourceConfigToTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultLatestDeploymentSourceConfigToHclTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultLatestDeploymentSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultLatestDeploymentSourceConfig | undefined) {
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

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
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

  // repo_id - computed: true, optional: false, required: false
  public get repoId() {
    return this.getStringAttribute('repo_id');
  }

  // repo_name - computed: true, optional: false, required: false
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
}
export interface DataCloudflarePagesProjectsResultLatestDeploymentSource {
}

export function dataCloudflarePagesProjectsResultLatestDeploymentSourceToTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultLatestDeploymentSourceToHclTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultLatestDeploymentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultLatestDeploymentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultLatestDeploymentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataCloudflarePagesProjectsResultLatestDeploymentSourceConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCloudflarePagesProjectsResultLatestDeploymentStages {
}

export function dataCloudflarePagesProjectsResultLatestDeploymentStagesToTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultLatestDeploymentStagesToHclTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeploymentStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultLatestDeploymentStagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflarePagesProjectsResultLatestDeploymentStages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultLatestDeploymentStages | undefined) {
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

export class DataCloudflarePagesProjectsResultLatestDeploymentStagesList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflarePagesProjectsResultLatestDeploymentStagesOutputReference {
    return new DataCloudflarePagesProjectsResultLatestDeploymentStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflarePagesProjectsResultLatestDeployment {
}

export function dataCloudflarePagesProjectsResultLatestDeploymentToTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultLatestDeploymentToHclTerraform(struct?: DataCloudflarePagesProjectsResultLatestDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultLatestDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultLatestDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultLatestDeployment | undefined) {
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
  private _buildConfig = new DataCloudflarePagesProjectsResultLatestDeploymentBuildConfigOutputReference(this, "build_config");
  public get buildConfig() {
    return this._buildConfig;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // deployment_trigger - computed: true, optional: false, required: false
  private _deploymentTrigger = new DataCloudflarePagesProjectsResultLatestDeploymentDeploymentTriggerOutputReference(this, "deployment_trigger");
  public get deploymentTrigger() {
    return this._deploymentTrigger;
  }

  // env_vars - computed: true, optional: false, required: false
  private _envVars = new DataCloudflarePagesProjectsResultLatestDeploymentEnvVarsMap(this, "env_vars");
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
  private _latestStage = new DataCloudflarePagesProjectsResultLatestDeploymentLatestStageOutputReference(this, "latest_stage");
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
  private _source = new DataCloudflarePagesProjectsResultLatestDeploymentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // stages - computed: true, optional: false, required: false
  private _stages = new DataCloudflarePagesProjectsResultLatestDeploymentStagesList(this, "stages", false);
  public get stages() {
    return this._stages;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // uses_functions - computed: true, optional: false, required: false
  public get usesFunctions() {
    return this.getBooleanAttribute('uses_functions');
  }
}
export interface DataCloudflarePagesProjectsResultSourceConfig {
}

export function dataCloudflarePagesProjectsResultSourceConfigToTerraform(struct?: DataCloudflarePagesProjectsResultSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultSourceConfigToHclTerraform(struct?: DataCloudflarePagesProjectsResultSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultSourceConfig | undefined) {
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

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
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

  // repo_id - computed: true, optional: false, required: false
  public get repoId() {
    return this.getStringAttribute('repo_id');
  }

  // repo_name - computed: true, optional: false, required: false
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
}
export interface DataCloudflarePagesProjectsResultSource {
}

export function dataCloudflarePagesProjectsResultSourceToTerraform(struct?: DataCloudflarePagesProjectsResultSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultSourceToHclTerraform(struct?: DataCloudflarePagesProjectsResultSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflarePagesProjectsResultSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResultSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataCloudflarePagesProjectsResultSourceConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCloudflarePagesProjectsResult {
}

export function dataCloudflarePagesProjectsResultToTerraform(struct?: DataCloudflarePagesProjectsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePagesProjectsResultToHclTerraform(struct?: DataCloudflarePagesProjectsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePagesProjectsResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflarePagesProjectsResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePagesProjectsResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build_config - computed: true, optional: false, required: false
  private _buildConfig = new DataCloudflarePagesProjectsResultBuildConfigOutputReference(this, "build_config");
  public get buildConfig() {
    return this._buildConfig;
  }

  // canonical_deployment - computed: true, optional: false, required: false
  private _canonicalDeployment = new DataCloudflarePagesProjectsResultCanonicalDeploymentOutputReference(this, "canonical_deployment");
  public get canonicalDeployment() {
    return this._canonicalDeployment;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // deployment_configs - computed: true, optional: false, required: false
  private _deploymentConfigs = new DataCloudflarePagesProjectsResultDeploymentConfigsOutputReference(this, "deployment_configs");
  public get deploymentConfigs() {
    return this._deploymentConfigs;
  }

  // domains - computed: true, optional: false, required: false
  public get domains() {
    return this.getListAttribute('domains');
  }

  // framework - computed: true, optional: false, required: false
  public get framework() {
    return this.getStringAttribute('framework');
  }

  // framework_version - computed: true, optional: false, required: false
  public get frameworkVersion() {
    return this.getStringAttribute('framework_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // latest_deployment - computed: true, optional: false, required: false
  private _latestDeployment = new DataCloudflarePagesProjectsResultLatestDeploymentOutputReference(this, "latest_deployment");
  public get latestDeployment() {
    return this._latestDeployment;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // preview_script_name - computed: true, optional: false, required: false
  public get previewScriptName() {
    return this.getStringAttribute('preview_script_name');
  }

  // production_branch - computed: true, optional: false, required: false
  public get productionBranch() {
    return this.getStringAttribute('production_branch');
  }

  // production_script_name - computed: true, optional: false, required: false
  public get productionScriptName() {
    return this.getStringAttribute('production_script_name');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataCloudflarePagesProjectsResultSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // uses_functions - computed: true, optional: false, required: false
  public get usesFunctions() {
    return this.getBooleanAttribute('uses_functions');
  }
}

export class DataCloudflarePagesProjectsResultList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflarePagesProjectsResultOutputReference {
    return new DataCloudflarePagesProjectsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/pages_projects cloudflare_pages_projects}
*/
export class DataCloudflarePagesProjects extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_pages_projects";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflarePagesProjects resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflarePagesProjects to import
  * @param importFromId The id of the existing DataCloudflarePagesProjects that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/pages_projects#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflarePagesProjects to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_pages_projects", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/pages_projects cloudflare_pages_projects} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflarePagesProjectsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflarePagesProjectsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_pages_projects',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.14.0',
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
  private _result = new DataCloudflarePagesProjectsResultList(this, "result", false);
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
