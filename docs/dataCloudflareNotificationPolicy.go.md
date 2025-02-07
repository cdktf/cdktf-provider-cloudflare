# `dataCloudflareNotificationPolicy` Submodule <a name="`dataCloudflareNotificationPolicy` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareNotificationPolicy <a name="DataCloudflareNotificationPolicy" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/notification_policy cloudflare_notification_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarenotificationpolicy"

datacloudflarenotificationpolicy.NewDataCloudflareNotificationPolicy(scope Construct, id *string, config DataCloudflareNotificationPolicyConfig) DataCloudflareNotificationPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig">DataCloudflareNotificationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig">DataCloudflareNotificationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.resetPolicyId">ResetPolicyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.resetPolicyId"></a>

```go
func ResetPolicyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareNotificationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarenotificationpolicy"

datacloudflarenotificationpolicy.DataCloudflareNotificationPolicy_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarenotificationpolicy"

datacloudflarenotificationpolicy.DataCloudflareNotificationPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarenotificationpolicy"

datacloudflarenotificationpolicy.DataCloudflareNotificationPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarenotificationpolicy"

datacloudflarenotificationpolicy.DataCloudflareNotificationPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareNotificationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareNotificationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareNotificationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/notification_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareNotificationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.alertInterval">AlertInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.alertType">AlertType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference">DataCloudflareNotificationPolicyFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.mechanisms">Mechanisms</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference">DataCloudflareNotificationPolicyMechanismsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.modified">Modified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AlertInterval`<sup>Required</sup> <a name="AlertInterval" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.alertInterval"></a>

```go
func AlertInterval() *string
```

- *Type:* *string

---

##### `AlertType`<sup>Required</sup> <a name="AlertType" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.alertType"></a>

```go
func AlertType() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.filters"></a>

```go
func Filters() DataCloudflareNotificationPolicyFiltersOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference">DataCloudflareNotificationPolicyFiltersOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Mechanisms`<sup>Required</sup> <a name="Mechanisms" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.mechanisms"></a>

```go
func Mechanisms() DataCloudflareNotificationPolicyMechanismsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference">DataCloudflareNotificationPolicyMechanismsOutputReference</a>

---

##### `Modified`<sup>Required</sup> <a name="Modified" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.modified"></a>

```go
func Modified() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareNotificationPolicyConfig <a name="DataCloudflareNotificationPolicyConfig" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarenotificationpolicy"

&datacloudflarenotificationpolicy.DataCloudflareNotificationPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	PolicyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account id. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | The unique identifier of a notification policy. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/notification_policy#account_id DataCloudflareNotificationPolicy#account_id}

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

The unique identifier of a notification policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/notification_policy#policy_id DataCloudflareNotificationPolicy#policy_id}

---

### DataCloudflareNotificationPolicyFilters <a name="DataCloudflareNotificationPolicyFilters" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFilters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarenotificationpolicy"

&datacloudflarenotificationpolicy.DataCloudflareNotificationPolicyFilters {

}
```


### DataCloudflareNotificationPolicyMechanisms <a name="DataCloudflareNotificationPolicyMechanisms" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanisms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanisms.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarenotificationpolicy"

&datacloudflarenotificationpolicy.DataCloudflareNotificationPolicyMechanisms {

}
```


### DataCloudflareNotificationPolicyMechanismsEmail <a name="DataCloudflareNotificationPolicyMechanismsEmail" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmail.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarenotificationpolicy"

&datacloudflarenotificationpolicy.DataCloudflareNotificationPolicyMechanismsEmail {

}
```


### DataCloudflareNotificationPolicyMechanismsPagerduty <a name="DataCloudflareNotificationPolicyMechanismsPagerduty" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerduty.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarenotificationpolicy"

&datacloudflarenotificationpolicy.DataCloudflareNotificationPolicyMechanismsPagerduty {

}
```


### DataCloudflareNotificationPolicyMechanismsWebhooks <a name="DataCloudflareNotificationPolicyMechanismsWebhooks" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarenotificationpolicy"

&datacloudflarenotificationpolicy.DataCloudflareNotificationPolicyMechanismsWebhooks {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareNotificationPolicyFiltersOutputReference <a name="DataCloudflareNotificationPolicyFiltersOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarenotificationpolicy"

datacloudflarenotificationpolicy.NewDataCloudflareNotificationPolicyFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareNotificationPolicyFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.affectedAsns">AffectedAsns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.affectedComponents">AffectedComponents</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.affectedLocations">AffectedLocations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.airportCode">AirportCode</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.alertTriggerPreferences">AlertTriggerPreferences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesValue">AlertTriggerPreferencesValue</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.enabled">Enabled</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.environment">Environment</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.event">Event</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.eventSource">EventSource</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.eventType">EventType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.groupBy">GroupBy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.healthCheckId">HealthCheckId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.incidentImpact">IncidentImpact</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.inputId">InputId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.insightClass">InsightClass</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.limit">Limit</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.logoTag">LogoTag</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.megabitsPerSecond">MegabitsPerSecond</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.newHealth">NewHealth</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.newStatus">NewStatus</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.packetsPerSecond">PacketsPerSecond</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.poolId">PoolId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.popNames">PopNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.product">Product</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.projectId">ProjectId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.protocol">Protocol</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.queryTag">QueryTag</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.requestsPerSecond">RequestsPerSecond</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.selectors">Selectors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.services">Services</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.slo">Slo</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.status">Status</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.targetHostname">TargetHostname</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.targetIp">TargetIp</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.targetZoneName">TargetZoneName</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.trafficExclusions">TrafficExclusions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.tunnelId">TunnelId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.tunnelName">TunnelName</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.where">Where</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFilters">DataCloudflareNotificationPolicyFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `AffectedAsns`<sup>Required</sup> <a name="AffectedAsns" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.affectedAsns"></a>

```go
func AffectedAsns() *[]*string
```

- *Type:* *[]*string

---

##### `AffectedComponents`<sup>Required</sup> <a name="AffectedComponents" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.affectedComponents"></a>

```go
func AffectedComponents() *[]*string
```

- *Type:* *[]*string

---

##### `AffectedLocations`<sup>Required</sup> <a name="AffectedLocations" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.affectedLocations"></a>

```go
func AffectedLocations() *[]*string
```

- *Type:* *[]*string

---

##### `AirportCode`<sup>Required</sup> <a name="AirportCode" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.airportCode"></a>

```go
func AirportCode() *[]*string
```

- *Type:* *[]*string

---

##### `AlertTriggerPreferences`<sup>Required</sup> <a name="AlertTriggerPreferences" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.alertTriggerPreferences"></a>

```go
func AlertTriggerPreferences() *[]*string
```

- *Type:* *[]*string

---

##### `AlertTriggerPreferencesValue`<sup>Required</sup> <a name="AlertTriggerPreferencesValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesValue"></a>

```go
func AlertTriggerPreferencesValue() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.enabled"></a>

```go
func Enabled() *[]*string
```

- *Type:* *[]*string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.environment"></a>

```go
func Environment() *[]*string
```

- *Type:* *[]*string

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.event"></a>

```go
func Event() *[]*string
```

- *Type:* *[]*string

---

##### `EventSource`<sup>Required</sup> <a name="EventSource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.eventSource"></a>

```go
func EventSource() *[]*string
```

- *Type:* *[]*string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.eventType"></a>

```go
func EventType() *[]*string
```

- *Type:* *[]*string

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.groupBy"></a>

```go
func GroupBy() *[]*string
```

- *Type:* *[]*string

---

##### `HealthCheckId`<sup>Required</sup> <a name="HealthCheckId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.healthCheckId"></a>

```go
func HealthCheckId() *[]*string
```

- *Type:* *[]*string

---

##### `IncidentImpact`<sup>Required</sup> <a name="IncidentImpact" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.incidentImpact"></a>

```go
func IncidentImpact() *[]*string
```

- *Type:* *[]*string

---

##### `InputId`<sup>Required</sup> <a name="InputId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.inputId"></a>

```go
func InputId() *[]*string
```

- *Type:* *[]*string

---

##### `InsightClass`<sup>Required</sup> <a name="InsightClass" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.insightClass"></a>

```go
func InsightClass() *[]*string
```

- *Type:* *[]*string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.limit"></a>

```go
func Limit() *[]*string
```

- *Type:* *[]*string

---

##### `LogoTag`<sup>Required</sup> <a name="LogoTag" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.logoTag"></a>

```go
func LogoTag() *[]*string
```

- *Type:* *[]*string

---

##### `MegabitsPerSecond`<sup>Required</sup> <a name="MegabitsPerSecond" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.megabitsPerSecond"></a>

```go
func MegabitsPerSecond() *[]*string
```

- *Type:* *[]*string

---

##### `NewHealth`<sup>Required</sup> <a name="NewHealth" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.newHealth"></a>

```go
func NewHealth() *[]*string
```

- *Type:* *[]*string

---

##### `NewStatus`<sup>Required</sup> <a name="NewStatus" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.newStatus"></a>

```go
func NewStatus() *[]*string
```

- *Type:* *[]*string

---

##### `PacketsPerSecond`<sup>Required</sup> <a name="PacketsPerSecond" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.packetsPerSecond"></a>

```go
func PacketsPerSecond() *[]*string
```

- *Type:* *[]*string

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.poolId"></a>

```go
func PoolId() *[]*string
```

- *Type:* *[]*string

---

##### `PopNames`<sup>Required</sup> <a name="PopNames" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.popNames"></a>

```go
func PopNames() *[]*string
```

- *Type:* *[]*string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.product"></a>

```go
func Product() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.projectId"></a>

```go
func ProjectId() *[]*string
```

- *Type:* *[]*string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.protocol"></a>

```go
func Protocol() *[]*string
```

- *Type:* *[]*string

---

##### `QueryTag`<sup>Required</sup> <a name="QueryTag" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.queryTag"></a>

```go
func QueryTag() *[]*string
```

- *Type:* *[]*string

---

##### `RequestsPerSecond`<sup>Required</sup> <a name="RequestsPerSecond" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.requestsPerSecond"></a>

```go
func RequestsPerSecond() *[]*string
```

- *Type:* *[]*string

---

##### `Selectors`<sup>Required</sup> <a name="Selectors" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.selectors"></a>

```go
func Selectors() *[]*string
```

- *Type:* *[]*string

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.services"></a>

```go
func Services() *[]*string
```

- *Type:* *[]*string

---

##### `Slo`<sup>Required</sup> <a name="Slo" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.slo"></a>

```go
func Slo() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.status"></a>

```go
func Status() *[]*string
```

- *Type:* *[]*string

---

##### `TargetHostname`<sup>Required</sup> <a name="TargetHostname" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.targetHostname"></a>

```go
func TargetHostname() *[]*string
```

- *Type:* *[]*string

---

##### `TargetIp`<sup>Required</sup> <a name="TargetIp" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.targetIp"></a>

```go
func TargetIp() *[]*string
```

- *Type:* *[]*string

---

##### `TargetZoneName`<sup>Required</sup> <a name="TargetZoneName" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.targetZoneName"></a>

```go
func TargetZoneName() *[]*string
```

- *Type:* *[]*string

---

##### `TrafficExclusions`<sup>Required</sup> <a name="TrafficExclusions" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.trafficExclusions"></a>

```go
func TrafficExclusions() *[]*string
```

- *Type:* *[]*string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.tunnelId"></a>

```go
func TunnelId() *[]*string
```

- *Type:* *[]*string

---

##### `TunnelName`<sup>Required</sup> <a name="TunnelName" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.tunnelName"></a>

```go
func TunnelName() *[]*string
```

- *Type:* *[]*string

---

##### `Where`<sup>Required</sup> <a name="Where" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.where"></a>

```go
func Where() *[]*string
```

- *Type:* *[]*string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareNotificationPolicyFilters
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFilters">DataCloudflareNotificationPolicyFilters</a>

---


### DataCloudflareNotificationPolicyMechanismsEmailList <a name="DataCloudflareNotificationPolicyMechanismsEmailList" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarenotificationpolicy"

datacloudflarenotificationpolicy.NewDataCloudflareNotificationPolicyMechanismsEmailList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareNotificationPolicyMechanismsEmailList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.get"></a>

```go
func Get(index *f64) DataCloudflareNotificationPolicyMechanismsEmailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareNotificationPolicyMechanismsEmailOutputReference <a name="DataCloudflareNotificationPolicyMechanismsEmailOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarenotificationpolicy"

datacloudflarenotificationpolicy.NewDataCloudflareNotificationPolicyMechanismsEmailOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareNotificationPolicyMechanismsEmailOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmail">DataCloudflareNotificationPolicyMechanismsEmail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareNotificationPolicyMechanismsEmail
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmail">DataCloudflareNotificationPolicyMechanismsEmail</a>

---


### DataCloudflareNotificationPolicyMechanismsOutputReference <a name="DataCloudflareNotificationPolicyMechanismsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarenotificationpolicy"

datacloudflarenotificationpolicy.NewDataCloudflareNotificationPolicyMechanismsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareNotificationPolicyMechanismsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.email">Email</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList">DataCloudflareNotificationPolicyMechanismsEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.pagerduty">Pagerduty</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList">DataCloudflareNotificationPolicyMechanismsPagerdutyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.webhooks">Webhooks</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList">DataCloudflareNotificationPolicyMechanismsWebhooksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanisms">DataCloudflareNotificationPolicyMechanisms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.email"></a>

```go
func Email() DataCloudflareNotificationPolicyMechanismsEmailList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList">DataCloudflareNotificationPolicyMechanismsEmailList</a>

---

##### `Pagerduty`<sup>Required</sup> <a name="Pagerduty" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.pagerduty"></a>

```go
func Pagerduty() DataCloudflareNotificationPolicyMechanismsPagerdutyList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList">DataCloudflareNotificationPolicyMechanismsPagerdutyList</a>

---

##### `Webhooks`<sup>Required</sup> <a name="Webhooks" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.webhooks"></a>

```go
func Webhooks() DataCloudflareNotificationPolicyMechanismsWebhooksList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList">DataCloudflareNotificationPolicyMechanismsWebhooksList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareNotificationPolicyMechanisms
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanisms">DataCloudflareNotificationPolicyMechanisms</a>

---


### DataCloudflareNotificationPolicyMechanismsPagerdutyList <a name="DataCloudflareNotificationPolicyMechanismsPagerdutyList" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarenotificationpolicy"

datacloudflarenotificationpolicy.NewDataCloudflareNotificationPolicyMechanismsPagerdutyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareNotificationPolicyMechanismsPagerdutyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.get"></a>

```go
func Get(index *f64) DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference <a name="DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarenotificationpolicy"

datacloudflarenotificationpolicy.NewDataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerduty">DataCloudflareNotificationPolicyMechanismsPagerduty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareNotificationPolicyMechanismsPagerduty
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerduty">DataCloudflareNotificationPolicyMechanismsPagerduty</a>

---


### DataCloudflareNotificationPolicyMechanismsWebhooksList <a name="DataCloudflareNotificationPolicyMechanismsWebhooksList" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarenotificationpolicy"

datacloudflarenotificationpolicy.NewDataCloudflareNotificationPolicyMechanismsWebhooksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareNotificationPolicyMechanismsWebhooksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.get"></a>

```go
func Get(index *f64) DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference <a name="DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflarenotificationpolicy"

datacloudflarenotificationpolicy.NewDataCloudflareNotificationPolicyMechanismsWebhooksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooks">DataCloudflareNotificationPolicyMechanismsWebhooks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareNotificationPolicyMechanismsWebhooks
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooks">DataCloudflareNotificationPolicyMechanismsWebhooks</a>

---



