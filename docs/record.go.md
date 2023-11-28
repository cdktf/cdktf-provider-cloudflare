# `record` Submodule <a name="`record` Submodule" id="@cdktf/provider-cloudflare.record"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Record <a name="Record" id="@cdktf/provider-cloudflare.record.Record"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record cloudflare_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.record.Record.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/record"

record.NewRecord(scope Construct, id *string, config RecordConfig) Record
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig">RecordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordConfig">RecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.putData">PutData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetAllowOverwrite">ResetAllowOverwrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetProxied">ResetProxied</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.record.Record.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.record.Record.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.record.Record.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.record.Record.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.record.Record.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.record.Record.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.record.Record.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.record.Record.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.record.Record.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.record.Record.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.record.Record.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.record.Record.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.record.Record.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.record.Record.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.record.Record.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.record.Record.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.record.Record.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.record.Record.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.record.Record.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.record.Record.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.record.Record.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.record.Record.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.record.Record.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.record.Record.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.record.Record.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.record.Record.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.record.Record.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutData` <a name="PutData" id="@cdktf/provider-cloudflare.record.Record.putData"></a>

```go
func PutData(value RecordData)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-cloudflare.record.Record.putTimeouts"></a>

```go
func PutTimeouts(value RecordTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.record.Record.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a>

---

##### `ResetAllowOverwrite` <a name="ResetAllowOverwrite" id="@cdktf/provider-cloudflare.record.Record.resetAllowOverwrite"></a>

```go
func ResetAllowOverwrite()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-cloudflare.record.Record.resetComment"></a>

```go
func ResetComment()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-cloudflare.record.Record.resetData"></a>

```go
func ResetData()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.record.Record.resetId"></a>

```go
func ResetId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-cloudflare.record.Record.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetProxied` <a name="ResetProxied" id="@cdktf/provider-cloudflare.record.Record.resetProxied"></a>

```go
func ResetProxied()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-cloudflare.record.Record.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-cloudflare.record.Record.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-cloudflare.record.Record.resetTtl"></a>

```go
func ResetTtl()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-cloudflare.record.Record.resetValue"></a>

```go
func ResetValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Record resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.record.Record.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/record"

record.Record_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.record.Record.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.record.Record.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/record"

record.Record_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.record.Record.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.record.Record.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/record"

record.Record_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.record.Record.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.record.Record.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/record"

record.Record_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Record resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.record.Record.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.record.Record.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Record to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.record.Record.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Record that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.record.Record.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Record to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.data">Data</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference">RecordDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.metadata">Metadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.proxiable">Proxiable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference">RecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.allowOverwriteInput">AllowOverwriteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.dataInput">DataInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.proxiedInput">ProxiedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.allowOverwrite">AllowOverwrite</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.proxied">Proxied</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.record.Record.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.record.Record.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.record.Record.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.record.Record.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.record.Record.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.record.Record.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.record.Record.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.record.Record.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.record.Record.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.record.Record.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.record.Record.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.record.Record.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.record.Record.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.record.Record.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.record.Record.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-cloudflare.record.Record.property.data"></a>

```go
func Data() RecordDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference">RecordDataOutputReference</a>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.record.Record.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-cloudflare.record.Record.property.metadata"></a>

```go
func Metadata() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.record.Record.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `Proxiable`<sup>Required</sup> <a name="Proxiable" id="@cdktf/provider-cloudflare.record.Record.property.proxiable"></a>

```go
func Proxiable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-cloudflare.record.Record.property.timeouts"></a>

```go
func Timeouts() RecordTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference">RecordTimeoutsOutputReference</a>

---

##### `AllowOverwriteInput`<sup>Optional</sup> <a name="AllowOverwriteInput" id="@cdktf/provider-cloudflare.record.Record.property.allowOverwriteInput"></a>

```go
func AllowOverwriteInput() interface{}
```

- *Type:* interface{}

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-cloudflare.record.Record.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-cloudflare.record.Record.property.dataInput"></a>

```go
func DataInput() RecordData
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.record.Record.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.record.Record.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-cloudflare.record.Record.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProxiedInput`<sup>Optional</sup> <a name="ProxiedInput" id="@cdktf/provider-cloudflare.record.Record.property.proxiedInput"></a>

```go
func ProxiedInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-cloudflare.record.Record.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-cloudflare.record.Record.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-cloudflare.record.Record.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.record.Record.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-cloudflare.record.Record.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.record.Record.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `AllowOverwrite`<sup>Required</sup> <a name="AllowOverwrite" id="@cdktf/provider-cloudflare.record.Record.property.allowOverwrite"></a>

```go
func AllowOverwrite() interface{}
```

- *Type:* interface{}

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-cloudflare.record.Record.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.record.Record.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.record.Record.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.record.Record.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Proxied`<sup>Required</sup> <a name="Proxied" id="@cdktf/provider-cloudflare.record.Record.property.proxied"></a>

```go
func Proxied() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-cloudflare.record.Record.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.record.Record.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.record.Record.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.record.Record.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.record.Record.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.record.Record.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RecordConfig <a name="RecordConfig" id="@cdktf/provider-cloudflare.record.RecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.record.RecordConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/record"

&record.RecordConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Type: *string,
	ZoneId: *string,
	AllowOverwrite: interface{},
	Comment: *string,
	Data: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.record.RecordData,
	Id: *string,
	Priority: *f64,
	Proxied: interface{},
	Tags: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.record.RecordTimeouts,
	Ttl: *f64,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.name">Name</a></code> | <code>*string</code> | The name of the record. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.type">Type</a></code> | <code>*string</code> | The type of the record. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.allowOverwrite">AllowOverwrite</a></code> | <code>interface{}</code> | Allow creation of this record in Terraform to overwrite an existing record, if any. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.comment">Comment</a></code> | <code>*string</code> | Comments or notes about the DNS record. This field has no effect on DNS responses. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.data">Data</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a></code> | data block. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#id Record#id}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.priority">Priority</a></code> | <code>*f64</code> | The priority of the record. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.proxied">Proxied</a></code> | <code>interface{}</code> | Whether the record gets Cloudflare's origin protection. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Custom tags for the DNS record. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.ttl">Ttl</a></code> | <code>*f64</code> | The TTL of the record. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.value">Value</a></code> | <code>*string</code> | The value of the record. Conflicts with `data`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.record.RecordConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.record.RecordConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.record.RecordConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.record.RecordConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.record.RecordConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.record.RecordConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.record.RecordConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.record.RecordConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the record. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#name Record#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.record.RecordConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the record.

Available values: `A`, `AAAA`, `CAA`, `CNAME`, `TXT`, `SRV`, `LOC`, `MX`, `NS`, `SPF`, `CERT`, `DNSKEY`, `DS`, `NAPTR`, `SMIMEA`, `SSHFP`, `TLSA`, `URI`, `PTR`, `HTTPS`, `SVCB`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#type Record#type}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.record.RecordConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#zone_id Record#zone_id}

---

##### `AllowOverwrite`<sup>Optional</sup> <a name="AllowOverwrite" id="@cdktf/provider-cloudflare.record.RecordConfig.property.allowOverwrite"></a>

```go
AllowOverwrite interface{}
```

- *Type:* interface{}

Allow creation of this record in Terraform to overwrite an existing record, if any.

This does not affect the ability to update the record in Terraform and does not prevent other resources within Terraform or manual changes outside Terraform from overwriting this record. **This configuration is not recommended for most environments**. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#allow_overwrite Record#allow_overwrite}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-cloudflare.record.RecordConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Comments or notes about the DNS record. This field has no effect on DNS responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#comment Record#comment}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-cloudflare.record.RecordConfig.property.data"></a>

```go
Data RecordData
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a>

data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#data Record#data}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.record.RecordConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#id Record#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-cloudflare.record.RecordConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

The priority of the record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#priority Record#priority}

---

##### `Proxied`<sup>Optional</sup> <a name="Proxied" id="@cdktf/provider-cloudflare.record.RecordConfig.property.proxied"></a>

```go
Proxied interface{}
```

- *Type:* interface{}

Whether the record gets Cloudflare's origin protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#proxied Record#proxied}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-cloudflare.record.RecordConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Custom tags for the DNS record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#tags Record#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-cloudflare.record.RecordConfig.property.timeouts"></a>

```go
Timeouts RecordTimeouts
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#timeouts Record#timeouts}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.record.RecordConfig.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

The TTL of the record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#ttl Record#ttl}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-cloudflare.record.RecordConfig.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the record. Conflicts with `data`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#value Record#value}

---

### RecordData <a name="RecordData" id="@cdktf/provider-cloudflare.record.RecordData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.record.RecordData.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/record"

&record.RecordData {
	Algorithm: *f64,
	Altitude: *f64,
	Certificate: *string,
	Content: *string,
	Digest: *string,
	DigestType: *f64,
	Fingerprint: *string,
	Flags: *string,
	KeyTag: *f64,
	LatDegrees: *f64,
	LatDirection: *string,
	LatMinutes: *f64,
	LatSeconds: *f64,
	LongDegrees: *f64,
	LongDirection: *string,
	LongMinutes: *f64,
	LongSeconds: *f64,
	MatchingType: *f64,
	Name: *string,
	Order: *f64,
	Port: *f64,
	PrecisionHorz: *f64,
	PrecisionVert: *f64,
	Preference: *f64,
	Priority: *f64,
	Proto: *string,
	Protocol: *f64,
	PublicKey: *string,
	Regex: *string,
	Replacement: *string,
	Selector: *f64,
	Service: *string,
	Size: *f64,
	Tag: *string,
	Target: *string,
	Type: *f64,
	Usage: *f64,
	Value: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.algorithm">Algorithm</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#algorithm Record#algorithm}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.altitude">Altitude</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#altitude Record#altitude}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.certificate">Certificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#certificate Record#certificate}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#content Record#content}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.digest">Digest</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#digest Record#digest}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.digestType">DigestType</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#digest_type Record#digest_type}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#fingerprint Record#fingerprint}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.flags">Flags</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#flags Record#flags}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.keyTag">KeyTag</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#key_tag Record#key_tag}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.latDegrees">LatDegrees</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#lat_degrees Record#lat_degrees}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.latDirection">LatDirection</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#lat_direction Record#lat_direction}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.latMinutes">LatMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#lat_minutes Record#lat_minutes}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.latSeconds">LatSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#lat_seconds Record#lat_seconds}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.longDegrees">LongDegrees</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#long_degrees Record#long_degrees}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.longDirection">LongDirection</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#long_direction Record#long_direction}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.longMinutes">LongMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#long_minutes Record#long_minutes}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.longSeconds">LongSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#long_seconds Record#long_seconds}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.matchingType">MatchingType</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#matching_type Record#matching_type}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#name Record#name}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.order">Order</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#order Record#order}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#port Record#port}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.precisionHorz">PrecisionHorz</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#precision_horz Record#precision_horz}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.precisionVert">PrecisionVert</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#precision_vert Record#precision_vert}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.preference">Preference</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#preference Record#preference}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#priority Record#priority}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.proto">Proto</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#proto Record#proto}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.protocol">Protocol</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#protocol Record#protocol}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.publicKey">PublicKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#public_key Record#public_key}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.regex">Regex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#regex Record#regex}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.replacement">Replacement</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#replacement Record#replacement}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.selector">Selector</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#selector Record#selector}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.service">Service</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#service Record#service}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#size Record#size}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.tag">Tag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#tag Record#tag}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.target">Target</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#target Record#target}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.type">Type</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#type Record#type}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.usage">Usage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#usage Record#usage}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#value Record#value}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#weight Record#weight}. |

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-cloudflare.record.RecordData.property.algorithm"></a>

```go
Algorithm *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#algorithm Record#algorithm}.

---

##### `Altitude`<sup>Optional</sup> <a name="Altitude" id="@cdktf/provider-cloudflare.record.RecordData.property.altitude"></a>

```go
Altitude *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#altitude Record#altitude}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.record.RecordData.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#certificate Record#certificate}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-cloudflare.record.RecordData.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#content Record#content}.

---

##### `Digest`<sup>Optional</sup> <a name="Digest" id="@cdktf/provider-cloudflare.record.RecordData.property.digest"></a>

```go
Digest *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#digest Record#digest}.

---

##### `DigestType`<sup>Optional</sup> <a name="DigestType" id="@cdktf/provider-cloudflare.record.RecordData.property.digestType"></a>

```go
DigestType *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#digest_type Record#digest_type}.

---

##### `Fingerprint`<sup>Optional</sup> <a name="Fingerprint" id="@cdktf/provider-cloudflare.record.RecordData.property.fingerprint"></a>

```go
Fingerprint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#fingerprint Record#fingerprint}.

---

##### `Flags`<sup>Optional</sup> <a name="Flags" id="@cdktf/provider-cloudflare.record.RecordData.property.flags"></a>

```go
Flags *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#flags Record#flags}.

---

##### `KeyTag`<sup>Optional</sup> <a name="KeyTag" id="@cdktf/provider-cloudflare.record.RecordData.property.keyTag"></a>

```go
KeyTag *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#key_tag Record#key_tag}.

---

##### `LatDegrees`<sup>Optional</sup> <a name="LatDegrees" id="@cdktf/provider-cloudflare.record.RecordData.property.latDegrees"></a>

```go
LatDegrees *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#lat_degrees Record#lat_degrees}.

---

##### `LatDirection`<sup>Optional</sup> <a name="LatDirection" id="@cdktf/provider-cloudflare.record.RecordData.property.latDirection"></a>

```go
LatDirection *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#lat_direction Record#lat_direction}.

---

##### `LatMinutes`<sup>Optional</sup> <a name="LatMinutes" id="@cdktf/provider-cloudflare.record.RecordData.property.latMinutes"></a>

```go
LatMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#lat_minutes Record#lat_minutes}.

---

##### `LatSeconds`<sup>Optional</sup> <a name="LatSeconds" id="@cdktf/provider-cloudflare.record.RecordData.property.latSeconds"></a>

```go
LatSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#lat_seconds Record#lat_seconds}.

---

##### `LongDegrees`<sup>Optional</sup> <a name="LongDegrees" id="@cdktf/provider-cloudflare.record.RecordData.property.longDegrees"></a>

```go
LongDegrees *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#long_degrees Record#long_degrees}.

---

##### `LongDirection`<sup>Optional</sup> <a name="LongDirection" id="@cdktf/provider-cloudflare.record.RecordData.property.longDirection"></a>

```go
LongDirection *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#long_direction Record#long_direction}.

---

##### `LongMinutes`<sup>Optional</sup> <a name="LongMinutes" id="@cdktf/provider-cloudflare.record.RecordData.property.longMinutes"></a>

```go
LongMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#long_minutes Record#long_minutes}.

---

##### `LongSeconds`<sup>Optional</sup> <a name="LongSeconds" id="@cdktf/provider-cloudflare.record.RecordData.property.longSeconds"></a>

```go
LongSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#long_seconds Record#long_seconds}.

---

##### `MatchingType`<sup>Optional</sup> <a name="MatchingType" id="@cdktf/provider-cloudflare.record.RecordData.property.matchingType"></a>

```go
MatchingType *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#matching_type Record#matching_type}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.record.RecordData.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#name Record#name}.

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-cloudflare.record.RecordData.property.order"></a>

```go
Order *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#order Record#order}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-cloudflare.record.RecordData.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#port Record#port}.

---

##### `PrecisionHorz`<sup>Optional</sup> <a name="PrecisionHorz" id="@cdktf/provider-cloudflare.record.RecordData.property.precisionHorz"></a>

```go
PrecisionHorz *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#precision_horz Record#precision_horz}.

---

##### `PrecisionVert`<sup>Optional</sup> <a name="PrecisionVert" id="@cdktf/provider-cloudflare.record.RecordData.property.precisionVert"></a>

```go
PrecisionVert *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#precision_vert Record#precision_vert}.

---

##### `Preference`<sup>Optional</sup> <a name="Preference" id="@cdktf/provider-cloudflare.record.RecordData.property.preference"></a>

```go
Preference *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#preference Record#preference}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-cloudflare.record.RecordData.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#priority Record#priority}.

---

##### `Proto`<sup>Optional</sup> <a name="Proto" id="@cdktf/provider-cloudflare.record.RecordData.property.proto"></a>

```go
Proto *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#proto Record#proto}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-cloudflare.record.RecordData.property.protocol"></a>

```go
Protocol *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#protocol Record#protocol}.

---

##### `PublicKey`<sup>Optional</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.record.RecordData.property.publicKey"></a>

```go
PublicKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#public_key Record#public_key}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-cloudflare.record.RecordData.property.regex"></a>

```go
Regex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#regex Record#regex}.

---

##### `Replacement`<sup>Optional</sup> <a name="Replacement" id="@cdktf/provider-cloudflare.record.RecordData.property.replacement"></a>

```go
Replacement *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#replacement Record#replacement}.

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-cloudflare.record.RecordData.property.selector"></a>

```go
Selector *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#selector Record#selector}.

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-cloudflare.record.RecordData.property.service"></a>

```go
Service *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#service Record#service}.

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-cloudflare.record.RecordData.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#size Record#size}.

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-cloudflare.record.RecordData.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#tag Record#tag}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-cloudflare.record.RecordData.property.target"></a>

```go
Target *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#target Record#target}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-cloudflare.record.RecordData.property.type"></a>

```go
Type *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#type Record#type}.

---

##### `Usage`<sup>Optional</sup> <a name="Usage" id="@cdktf/provider-cloudflare.record.RecordData.property.usage"></a>

```go
Usage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#usage Record#usage}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-cloudflare.record.RecordData.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#value Record#value}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-cloudflare.record.RecordData.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#weight Record#weight}.

---

### RecordTimeouts <a name="RecordTimeouts" id="@cdktf/provider-cloudflare.record.RecordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.record.RecordTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/record"

&record.RecordTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#create Record#create}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#update Record#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-cloudflare.record.RecordTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#create Record#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-cloudflare.record.RecordTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.19.0/docs/resources/record#update Record#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RecordDataOutputReference <a name="RecordDataOutputReference" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/record"

record.NewRecordDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RecordDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetAltitude">ResetAltitude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetDigest">ResetDigest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetDigestType">ResetDigestType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetFingerprint">ResetFingerprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetFlags">ResetFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetKeyTag">ResetKeyTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatDegrees">ResetLatDegrees</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatDirection">ResetLatDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatMinutes">ResetLatMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatSeconds">ResetLatSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongDegrees">ResetLongDegrees</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongDirection">ResetLongDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongMinutes">ResetLongMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongSeconds">ResetLongSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetMatchingType">ResetMatchingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPrecisionHorz">ResetPrecisionHorz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPrecisionVert">ResetPrecisionVert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPreference">ResetPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetProto">ResetProto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPublicKey">ResetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetReplacement">ResetReplacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetSelector">ResetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetUsage">ResetUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetAlgorithm"></a>

```go
func ResetAlgorithm()
```

##### `ResetAltitude` <a name="ResetAltitude" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetAltitude"></a>

```go
func ResetAltitude()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetContent"></a>

```go
func ResetContent()
```

##### `ResetDigest` <a name="ResetDigest" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetDigest"></a>

```go
func ResetDigest()
```

##### `ResetDigestType` <a name="ResetDigestType" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetDigestType"></a>

```go
func ResetDigestType()
```

##### `ResetFingerprint` <a name="ResetFingerprint" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetFingerprint"></a>

```go
func ResetFingerprint()
```

##### `ResetFlags` <a name="ResetFlags" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetFlags"></a>

```go
func ResetFlags()
```

##### `ResetKeyTag` <a name="ResetKeyTag" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetKeyTag"></a>

```go
func ResetKeyTag()
```

##### `ResetLatDegrees` <a name="ResetLatDegrees" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatDegrees"></a>

```go
func ResetLatDegrees()
```

##### `ResetLatDirection` <a name="ResetLatDirection" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatDirection"></a>

```go
func ResetLatDirection()
```

##### `ResetLatMinutes` <a name="ResetLatMinutes" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatMinutes"></a>

```go
func ResetLatMinutes()
```

##### `ResetLatSeconds` <a name="ResetLatSeconds" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatSeconds"></a>

```go
func ResetLatSeconds()
```

##### `ResetLongDegrees` <a name="ResetLongDegrees" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongDegrees"></a>

```go
func ResetLongDegrees()
```

##### `ResetLongDirection` <a name="ResetLongDirection" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongDirection"></a>

```go
func ResetLongDirection()
```

##### `ResetLongMinutes` <a name="ResetLongMinutes" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongMinutes"></a>

```go
func ResetLongMinutes()
```

##### `ResetLongSeconds` <a name="ResetLongSeconds" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongSeconds"></a>

```go
func ResetLongSeconds()
```

##### `ResetMatchingType` <a name="ResetMatchingType" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetMatchingType"></a>

```go
func ResetMatchingType()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPrecisionHorz` <a name="ResetPrecisionHorz" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPrecisionHorz"></a>

```go
func ResetPrecisionHorz()
```

##### `ResetPrecisionVert` <a name="ResetPrecisionVert" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPrecisionVert"></a>

```go
func ResetPrecisionVert()
```

##### `ResetPreference` <a name="ResetPreference" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPreference"></a>

```go
func ResetPreference()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetProto` <a name="ResetProto" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetProto"></a>

```go
func ResetProto()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetPublicKey` <a name="ResetPublicKey" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPublicKey"></a>

```go
func ResetPublicKey()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetRegex"></a>

```go
func ResetRegex()
```

##### `ResetReplacement` <a name="ResetReplacement" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetReplacement"></a>

```go
func ResetReplacement()
```

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetSelector"></a>

```go
func ResetSelector()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetService"></a>

```go
func ResetService()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetSize"></a>

```go
func ResetSize()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetTag"></a>

```go
func ResetTag()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetTarget"></a>

```go
func ResetTarget()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetUsage` <a name="ResetUsage" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetUsage"></a>

```go
func ResetUsage()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.altitudeInput">AltitudeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestInput">DigestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestTypeInput">DigestTypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fingerprintInput">FingerprintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.flagsInput">FlagsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.keyTagInput">KeyTagInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDegreesInput">LatDegreesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDirectionInput">LatDirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latMinutesInput">LatMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latSecondsInput">LatSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDegreesInput">LongDegreesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDirectionInput">LongDirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longMinutesInput">LongMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longSecondsInput">LongSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.matchingTypeInput">MatchingTypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.orderInput">OrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionHorzInput">PrecisionHorzInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionVertInput">PrecisionVertInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.preferenceInput">PreferenceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protoInput">ProtoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.regexInput">RegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.replacementInput">ReplacementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.selectorInput">SelectorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.typeInput">TypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.usageInput">UsageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.algorithm">Algorithm</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.altitude">Altitude</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digest">Digest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestType">DigestType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.flags">Flags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.keyTag">KeyTag</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDegrees">LatDegrees</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDirection">LatDirection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latMinutes">LatMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latSeconds">LatSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDegrees">LongDegrees</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDirection">LongDirection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longMinutes">LongMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longSeconds">LongSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.matchingType">MatchingType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.order">Order</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionHorz">PrecisionHorz</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionVert">PrecisionVert</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.preference">Preference</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.proto">Proto</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protocol">Protocol</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.replacement">Replacement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.selector">Selector</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.type">Type</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.usage">Usage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.algorithmInput"></a>

```go
func AlgorithmInput() *f64
```

- *Type:* *f64

---

##### `AltitudeInput`<sup>Optional</sup> <a name="AltitudeInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.altitudeInput"></a>

```go
func AltitudeInput() *f64
```

- *Type:* *f64

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `DigestInput`<sup>Optional</sup> <a name="DigestInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestInput"></a>

```go
func DigestInput() *string
```

- *Type:* *string

---

##### `DigestTypeInput`<sup>Optional</sup> <a name="DigestTypeInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestTypeInput"></a>

```go
func DigestTypeInput() *f64
```

- *Type:* *f64

---

##### `FingerprintInput`<sup>Optional</sup> <a name="FingerprintInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fingerprintInput"></a>

```go
func FingerprintInput() *string
```

- *Type:* *string

---

##### `FlagsInput`<sup>Optional</sup> <a name="FlagsInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.flagsInput"></a>

```go
func FlagsInput() *string
```

- *Type:* *string

---

##### `KeyTagInput`<sup>Optional</sup> <a name="KeyTagInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.keyTagInput"></a>

```go
func KeyTagInput() *f64
```

- *Type:* *f64

---

##### `LatDegreesInput`<sup>Optional</sup> <a name="LatDegreesInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDegreesInput"></a>

```go
func LatDegreesInput() *f64
```

- *Type:* *f64

---

##### `LatDirectionInput`<sup>Optional</sup> <a name="LatDirectionInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDirectionInput"></a>

```go
func LatDirectionInput() *string
```

- *Type:* *string

---

##### `LatMinutesInput`<sup>Optional</sup> <a name="LatMinutesInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latMinutesInput"></a>

```go
func LatMinutesInput() *f64
```

- *Type:* *f64

---

##### `LatSecondsInput`<sup>Optional</sup> <a name="LatSecondsInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latSecondsInput"></a>

```go
func LatSecondsInput() *f64
```

- *Type:* *f64

---

##### `LongDegreesInput`<sup>Optional</sup> <a name="LongDegreesInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDegreesInput"></a>

```go
func LongDegreesInput() *f64
```

- *Type:* *f64

---

##### `LongDirectionInput`<sup>Optional</sup> <a name="LongDirectionInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDirectionInput"></a>

```go
func LongDirectionInput() *string
```

- *Type:* *string

---

##### `LongMinutesInput`<sup>Optional</sup> <a name="LongMinutesInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longMinutesInput"></a>

```go
func LongMinutesInput() *f64
```

- *Type:* *f64

---

##### `LongSecondsInput`<sup>Optional</sup> <a name="LongSecondsInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longSecondsInput"></a>

```go
func LongSecondsInput() *f64
```

- *Type:* *f64

---

##### `MatchingTypeInput`<sup>Optional</sup> <a name="MatchingTypeInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.matchingTypeInput"></a>

```go
func MatchingTypeInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.orderInput"></a>

```go
func OrderInput() *f64
```

- *Type:* *f64

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PrecisionHorzInput`<sup>Optional</sup> <a name="PrecisionHorzInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionHorzInput"></a>

```go
func PrecisionHorzInput() *f64
```

- *Type:* *f64

---

##### `PrecisionVertInput`<sup>Optional</sup> <a name="PrecisionVertInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionVertInput"></a>

```go
func PrecisionVertInput() *f64
```

- *Type:* *f64

---

##### `PreferenceInput`<sup>Optional</sup> <a name="PreferenceInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.preferenceInput"></a>

```go
func PreferenceInput() *f64
```

- *Type:* *f64

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *f64
```

- *Type:* *f64

---

##### `ProtoInput`<sup>Optional</sup> <a name="ProtoInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protoInput"></a>

```go
func ProtoInput() *string
```

- *Type:* *string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.publicKeyInput"></a>

```go
func PublicKeyInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.regexInput"></a>

```go
func RegexInput() *string
```

- *Type:* *string

---

##### `ReplacementInput`<sup>Optional</sup> <a name="ReplacementInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.replacementInput"></a>

```go
func ReplacementInput() *string
```

- *Type:* *string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.selectorInput"></a>

```go
func SelectorInput() *f64
```

- *Type:* *f64

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.typeInput"></a>

```go
func TypeInput() *f64
```

- *Type:* *f64

---

##### `UsageInput`<sup>Optional</sup> <a name="UsageInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.usageInput"></a>

```go
func UsageInput() *f64
```

- *Type:* *f64

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.algorithm"></a>

```go
func Algorithm() *f64
```

- *Type:* *f64

---

##### `Altitude`<sup>Required</sup> <a name="Altitude" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.altitude"></a>

```go
func Altitude() *f64
```

- *Type:* *f64

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digest"></a>

```go
func Digest() *string
```

- *Type:* *string

---

##### `DigestType`<sup>Required</sup> <a name="DigestType" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestType"></a>

```go
func DigestType() *f64
```

- *Type:* *f64

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `Flags`<sup>Required</sup> <a name="Flags" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.flags"></a>

```go
func Flags() *string
```

- *Type:* *string

---

##### `KeyTag`<sup>Required</sup> <a name="KeyTag" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.keyTag"></a>

```go
func KeyTag() *f64
```

- *Type:* *f64

---

##### `LatDegrees`<sup>Required</sup> <a name="LatDegrees" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDegrees"></a>

```go
func LatDegrees() *f64
```

- *Type:* *f64

---

##### `LatDirection`<sup>Required</sup> <a name="LatDirection" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDirection"></a>

```go
func LatDirection() *string
```

- *Type:* *string

---

##### `LatMinutes`<sup>Required</sup> <a name="LatMinutes" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latMinutes"></a>

```go
func LatMinutes() *f64
```

- *Type:* *f64

---

##### `LatSeconds`<sup>Required</sup> <a name="LatSeconds" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latSeconds"></a>

```go
func LatSeconds() *f64
```

- *Type:* *f64

---

##### `LongDegrees`<sup>Required</sup> <a name="LongDegrees" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDegrees"></a>

```go
func LongDegrees() *f64
```

- *Type:* *f64

---

##### `LongDirection`<sup>Required</sup> <a name="LongDirection" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDirection"></a>

```go
func LongDirection() *string
```

- *Type:* *string

---

##### `LongMinutes`<sup>Required</sup> <a name="LongMinutes" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longMinutes"></a>

```go
func LongMinutes() *f64
```

- *Type:* *f64

---

##### `LongSeconds`<sup>Required</sup> <a name="LongSeconds" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longSeconds"></a>

```go
func LongSeconds() *f64
```

- *Type:* *f64

---

##### `MatchingType`<sup>Required</sup> <a name="MatchingType" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.matchingType"></a>

```go
func MatchingType() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.order"></a>

```go
func Order() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PrecisionHorz`<sup>Required</sup> <a name="PrecisionHorz" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionHorz"></a>

```go
func PrecisionHorz() *f64
```

- *Type:* *f64

---

##### `PrecisionVert`<sup>Required</sup> <a name="PrecisionVert" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionVert"></a>

```go
func PrecisionVert() *f64
```

- *Type:* *f64

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.preference"></a>

```go
func Preference() *f64
```

- *Type:* *f64

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Proto`<sup>Required</sup> <a name="Proto" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.proto"></a>

```go
func Proto() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protocol"></a>

```go
func Protocol() *f64
```

- *Type:* *f64

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `Replacement`<sup>Required</sup> <a name="Replacement" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.replacement"></a>

```go
func Replacement() *string
```

- *Type:* *string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.selector"></a>

```go
func Selector() *f64
```

- *Type:* *f64

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.type"></a>

```go
func Type() *f64
```

- *Type:* *f64

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.usage"></a>

```go
func Usage() *f64
```

- *Type:* *f64

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.internalValue"></a>

```go
func InternalValue() RecordData
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a>

---


### RecordTimeoutsOutputReference <a name="RecordTimeoutsOutputReference" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/record"

record.NewRecordTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RecordTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



