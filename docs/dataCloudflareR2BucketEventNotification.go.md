# `dataCloudflareR2BucketEventNotification` Submodule <a name="`dataCloudflareR2BucketEventNotification` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareR2BucketEventNotification <a name="DataCloudflareR2BucketEventNotification" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/r2_bucket_event_notification cloudflare_r2_bucket_event_notification}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketeventnotification"

datacloudflarer2bucketeventnotification.NewDataCloudflareR2BucketEventNotification(scope Construct, id *string, config DataCloudflareR2BucketEventNotificationConfig) DataCloudflareR2BucketEventNotification
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig">DataCloudflareR2BucketEventNotificationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig">DataCloudflareR2BucketEventNotificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareR2BucketEventNotification resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketeventnotification"

datacloudflarer2bucketeventnotification.DataCloudflareR2BucketEventNotification_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketeventnotification"

datacloudflarer2bucketeventnotification.DataCloudflareR2BucketEventNotification_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketeventnotification"

datacloudflarer2bucketeventnotification.DataCloudflareR2BucketEventNotification_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketeventnotification"

datacloudflarer2bucketeventnotification.DataCloudflareR2BucketEventNotification_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareR2BucketEventNotification resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareR2BucketEventNotification to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareR2BucketEventNotification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/r2_bucket_event_notification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareR2BucketEventNotification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.queueName">QueueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList">DataCloudflareR2BucketEventNotificationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.queueIdInput">QueueIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.queueId">QueueId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `QueueName`<sup>Required</sup> <a name="QueueName" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.queueName"></a>

```go
func QueueName() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.rules"></a>

```go
func Rules() DataCloudflareR2BucketEventNotificationRulesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList">DataCloudflareR2BucketEventNotificationRulesList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `QueueIdInput`<sup>Optional</sup> <a name="QueueIdInput" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.queueIdInput"></a>

```go
func QueueIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `QueueId`<sup>Required</sup> <a name="QueueId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.queueId"></a>

```go
func QueueId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotification.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareR2BucketEventNotificationConfig <a name="DataCloudflareR2BucketEventNotificationConfig" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketeventnotification"

&datacloudflarer2bucketeventnotification.DataCloudflareR2BucketEventNotificationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	BucketName: *string,
	QueueId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.bucketName">BucketName</a></code> | <code>*string</code> | Name of the bucket. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.queueId">QueueId</a></code> | <code>*string</code> | Queue ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/r2_bucket_event_notification#account_id DataCloudflareR2BucketEventNotification#account_id}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/r2_bucket_event_notification#bucket_name DataCloudflareR2BucketEventNotification#bucket_name}

---

##### `QueueId`<sup>Required</sup> <a name="QueueId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationConfig.property.queueId"></a>

```go
QueueId *string
```

- *Type:* *string

Queue ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/r2_bucket_event_notification#queue_id DataCloudflareR2BucketEventNotification#queue_id}

---

### DataCloudflareR2BucketEventNotificationRules <a name="DataCloudflareR2BucketEventNotificationRules" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketeventnotification"

&datacloudflarer2bucketeventnotification.DataCloudflareR2BucketEventNotificationRules {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareR2BucketEventNotificationRulesList <a name="DataCloudflareR2BucketEventNotificationRulesList" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketeventnotification"

datacloudflarer2bucketeventnotification.NewDataCloudflareR2BucketEventNotificationRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareR2BucketEventNotificationRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList.get"></a>

```go
func Get(index *f64) DataCloudflareR2BucketEventNotificationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareR2BucketEventNotificationRulesOutputReference <a name="DataCloudflareR2BucketEventNotificationRulesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarer2bucketeventnotification"

datacloudflarer2bucketeventnotification.NewDataCloudflareR2BucketEventNotificationRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareR2BucketEventNotificationRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.property.ruleId">RuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRules">DataCloudflareR2BucketEventNotificationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.property.ruleId"></a>

```go
func RuleId() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareR2BucketEventNotificationRules
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareR2BucketEventNotification.DataCloudflareR2BucketEventNotificationRules">DataCloudflareR2BucketEventNotificationRules</a>

---



