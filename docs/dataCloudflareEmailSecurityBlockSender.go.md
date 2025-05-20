# `dataCloudflareEmailSecurityBlockSender` Submodule <a name="`dataCloudflareEmailSecurityBlockSender` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityBlockSender <a name="DataCloudflareEmailSecurityBlockSender" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/email_security_block_sender cloudflare_email_security_block_sender}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareemailsecurityblocksender"

datacloudflareemailsecurityblocksender.NewDataCloudflareEmailSecurityBlockSender(scope Construct, id *string, config DataCloudflareEmailSecurityBlockSenderConfig) DataCloudflareEmailSecurityBlockSender
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderConfig">DataCloudflareEmailSecurityBlockSenderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderConfig">DataCloudflareEmailSecurityBlockSenderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.resetPatternId">ResetPatternId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.putFilter"></a>

```go
func PutFilter(value DataCloudflareEmailSecurityBlockSenderFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilter">DataCloudflareEmailSecurityBlockSenderFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetPatternId` <a name="ResetPatternId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.resetPatternId"></a>

```go
func ResetPatternId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareEmailSecurityBlockSender resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareemailsecurityblocksender"

datacloudflareemailsecurityblocksender.DataCloudflareEmailSecurityBlockSender_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareemailsecurityblocksender"

datacloudflareemailsecurityblocksender.DataCloudflareEmailSecurityBlockSender_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareemailsecurityblocksender"

datacloudflareemailsecurityblocksender.DataCloudflareEmailSecurityBlockSender_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareemailsecurityblocksender"

datacloudflareemailsecurityblocksender.DataCloudflareEmailSecurityBlockSender_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareEmailSecurityBlockSender resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareEmailSecurityBlockSender to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareEmailSecurityBlockSender that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/email_security_block_sender#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityBlockSender to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.comments">Comments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference">DataCloudflareEmailSecurityBlockSenderFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.isRegex">IsRegex</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.patternType">PatternType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.patternIdInput">PatternIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.patternId">PatternId</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.comments"></a>

```go
func Comments() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.filter"></a>

```go
func Filter() DataCloudflareEmailSecurityBlockSenderFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference">DataCloudflareEmailSecurityBlockSenderFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `IsRegex`<sup>Required</sup> <a name="IsRegex" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.isRegex"></a>

```go
func IsRegex() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `PatternType`<sup>Required</sup> <a name="PatternType" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.patternType"></a>

```go
func PatternType() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `PatternIdInput`<sup>Optional</sup> <a name="PatternIdInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.patternIdInput"></a>

```go
func PatternIdInput() *f64
```

- *Type:* *f64

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `PatternId`<sup>Required</sup> <a name="PatternId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.patternId"></a>

```go
func PatternId() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSender.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityBlockSenderConfig <a name="DataCloudflareEmailSecurityBlockSenderConfig" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareemailsecurityblocksender"

&datacloudflareemailsecurityblocksender.DataCloudflareEmailSecurityBlockSenderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Filter: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilter,
	PatternId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Account Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilter">DataCloudflareEmailSecurityBlockSenderFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/email_security_block_sender#filter DataCloudflareEmailSecurityBlockSender#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderConfig.property.patternId">PatternId</a></code> | <code>*f64</code> | The unique identifier for the allow policy. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/email_security_block_sender#account_id DataCloudflareEmailSecurityBlockSender#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderConfig.property.filter"></a>

```go
Filter DataCloudflareEmailSecurityBlockSenderFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilter">DataCloudflareEmailSecurityBlockSenderFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/email_security_block_sender#filter DataCloudflareEmailSecurityBlockSender#filter}.

---

##### `PatternId`<sup>Optional</sup> <a name="PatternId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderConfig.property.patternId"></a>

```go
PatternId *f64
```

- *Type:* *f64

The unique identifier for the allow policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/email_security_block_sender#pattern_id DataCloudflareEmailSecurityBlockSender#pattern_id}

---

### DataCloudflareEmailSecurityBlockSenderFilter <a name="DataCloudflareEmailSecurityBlockSenderFilter" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareemailsecurityblocksender"

&datacloudflareemailsecurityblocksender.DataCloudflareEmailSecurityBlockSenderFilter {
	Direction: *string,
	Order: *string,
	PatternType: *string,
	Search: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilter.property.direction">Direction</a></code> | <code>*string</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilter.property.order">Order</a></code> | <code>*string</code> | The field to sort by. Available values: "pattern", "created_at". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilter.property.patternType">PatternType</a></code> | <code>*string</code> | Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilter.property.search">Search</a></code> | <code>*string</code> | Allows searching in multiple properties of a record simultaneously. |

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilter.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/email_security_block_sender#direction DataCloudflareEmailSecurityBlockSender#direction}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilter.property.order"></a>

```go
Order *string
```

- *Type:* *string

The field to sort by. Available values: "pattern", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/email_security_block_sender#order DataCloudflareEmailSecurityBlockSender#order}

---

##### `PatternType`<sup>Optional</sup> <a name="PatternType" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilter.property.patternType"></a>

```go
PatternType *string
```

- *Type:* *string

Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/email_security_block_sender#pattern_type DataCloudflareEmailSecurityBlockSender#pattern_type}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilter.property.search"></a>

```go
Search *string
```

- *Type:* *string

Allows searching in multiple properties of a record simultaneously.

This parameter is intended for human users, not automation. Its exact
behavior is intentionally left unspecified and is subject to change
in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/email_security_block_sender#search DataCloudflareEmailSecurityBlockSender#search}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityBlockSenderFilterOutputReference <a name="DataCloudflareEmailSecurityBlockSenderFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/datacloudflareemailsecurityblocksender"

datacloudflareemailsecurityblocksender.NewDataCloudflareEmailSecurityBlockSenderFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareEmailSecurityBlockSenderFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.resetPatternType">ResetPatternType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.resetSearch">ResetSearch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetPatternType` <a name="ResetPatternType" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.resetPatternType"></a>

```go
func ResetPatternType()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.resetSearch"></a>

```go
func ResetSearch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.property.patternTypeInput">PatternTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.property.searchInput">SearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.property.patternType">PatternType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.property.search">Search</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `PatternTypeInput`<sup>Optional</sup> <a name="PatternTypeInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.property.patternTypeInput"></a>

```go
func PatternTypeInput() *string
```

- *Type:* *string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.property.searchInput"></a>

```go
func SearchInput() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `PatternType`<sup>Required</sup> <a name="PatternType" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.property.patternType"></a>

```go
func PatternType() *string
```

- *Type:* *string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.property.search"></a>

```go
func Search() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityBlockSender.DataCloudflareEmailSecurityBlockSenderFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



