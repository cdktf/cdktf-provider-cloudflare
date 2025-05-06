# `dnsRecord` Submodule <a name="`dnsRecord` Submodule" id="@cdktf/provider-cloudflare.dnsRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsRecord <a name="DnsRecord" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record cloudflare_dns_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/dnsrecord"

dnsrecord.NewDnsRecord(scope Construct, id *string, config DnsRecordConfig) DnsRecord
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig">DnsRecordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig">DnsRecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData">PutData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetProxied">ResetProxied</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutData` <a name="PutData" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData"></a>

```go
func PutData(value DnsRecordData)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a>

---

##### `PutSettings` <a name="PutSettings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putSettings"></a>

```go
func PutSettings(value DnsRecordSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetComment"></a>

```go
func ResetComment()
```

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetContent"></a>

```go
func ResetContent()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetData"></a>

```go
func ResetData()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetProxied` <a name="ResetProxied" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetProxied"></a>

```go
func ResetProxied()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetSettings"></a>

```go
func ResetSettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DnsRecord resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/dnsrecord"

dnsrecord.DnsRecord_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/dnsrecord"

dnsrecord.DnsRecord_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/dnsrecord"

dnsrecord.DnsRecord_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/dnsrecord"

dnsrecord.DnsRecord_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DnsRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DnsRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DnsRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DnsRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.commentModifiedOn">CommentModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.data">Data</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference">DnsRecordDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.meta">Meta</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxiable">Proxiable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference">DnsRecordSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tagsModifiedOn">TagsModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.dataInput">DataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxiedInput">ProxiedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.settingsInput">SettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxied">Proxied</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CommentModifiedOn`<sup>Required</sup> <a name="CommentModifiedOn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.commentModifiedOn"></a>

```go
func CommentModifiedOn() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.data"></a>

```go
func Data() DnsRecordDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference">DnsRecordDataOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.meta"></a>

```go
func Meta() *string
```

- *Type:* *string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `Proxiable`<sup>Required</sup> <a name="Proxiable" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxiable"></a>

```go
func Proxiable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.settings"></a>

```go
func Settings() DnsRecordSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference">DnsRecordSettingsOutputReference</a>

---

##### `TagsModifiedOn`<sup>Required</sup> <a name="TagsModifiedOn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tagsModifiedOn"></a>

```go
func TagsModifiedOn() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.dataInput"></a>

```go
func DataInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProxiedInput`<sup>Optional</sup> <a name="ProxiedInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxiedInput"></a>

```go
func ProxiedInput() interface{}
```

- *Type:* interface{}

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.settingsInput"></a>

```go
func SettingsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Proxied`<sup>Required</sup> <a name="Proxied" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxied"></a>

```go
func Proxied() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsRecordConfig <a name="DnsRecordConfig" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/dnsrecord"

&dnsrecord.DnsRecordConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Ttl: *f64,
	Type: *string,
	ZoneId: *string,
	Comment: *string,
	Content: *string,
	Data: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12.dnsRecord.DnsRecordData,
	Priority: *f64,
	Proxied: interface{},
	Settings: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12.dnsRecord.DnsRecordSettings,
	Tags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.name">Name</a></code> | <code>*string</code> | DNS record name (or @ for the zone apex) in Punycode. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.ttl">Ttl</a></code> | <code>*f64</code> | Time To Live (TTL) of the DNS record in seconds. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.type">Type</a></code> | <code>*string</code> | Record type. Available values: "A". |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.comment">Comment</a></code> | <code>*string</code> | Comments or notes about the DNS record. This field has no effect on DNS responses. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.content">Content</a></code> | <code>*string</code> | A valid IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.data">Data</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a></code> | Components of a CAA record. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.priority">Priority</a></code> | <code>*f64</code> | Required for MX, SRV and URI records; unused by other record types. Records with lower priorities are preferred. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.proxied">Proxied</a></code> | <code>interface{}</code> | Whether the record is receiving the performance and security benefits of Cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a></code> | Settings for the DNS record. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Custom tags for the DNS record. This field has no effect on DNS responses. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

DNS record name (or @ for the zone apex) in Punycode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#name DnsRecord#name}

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

Time To Live (TTL) of the DNS record in seconds.

Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#ttl DnsRecord#ttl}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Record type. Available values: "A".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#type DnsRecord#type}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#zone_id DnsRecord#zone_id}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Comments or notes about the DNS record. This field has no effect on DNS responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#comment DnsRecord#comment}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.content"></a>

```go
Content *string
```

- *Type:* *string

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#content DnsRecord#content}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.data"></a>

```go
Data DnsRecordData
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a>

Components of a CAA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#data DnsRecord#data}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Required for MX, SRV and URI records; unused by other record types. Records with lower priorities are preferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#priority DnsRecord#priority}

---

##### `Proxied`<sup>Optional</sup> <a name="Proxied" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.proxied"></a>

```go
Proxied interface{}
```

- *Type:* interface{}

Whether the record is receiving the performance and security benefits of Cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#proxied DnsRecord#proxied}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.settings"></a>

```go
Settings DnsRecordSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a>

Settings for the DNS record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#settings DnsRecord#settings}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Custom tags for the DNS record. This field has no effect on DNS responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#tags DnsRecord#tags}

---

### DnsRecordData <a name="DnsRecordData" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/dnsrecord"

&dnsrecord.DnsRecordData {
	Algorithm: *f64,
	Altitude: *f64,
	Certificate: *string,
	Digest: *string,
	DigestType: *f64,
	Fingerprint: *string,
	Flags: *f64,
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
	Order: *f64,
	Port: *f64,
	PrecisionHorz: *f64,
	PrecisionVert: *f64,
	Preference: *f64,
	Priority: *f64,
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
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.algorithm">Algorithm</a></code> | <code>*f64</code> | Algorithm. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.altitude">Altitude</a></code> | <code>*f64</code> | Altitude of location in meters. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.certificate">Certificate</a></code> | <code>*string</code> | Certificate. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.digest">Digest</a></code> | <code>*string</code> | Digest. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.digestType">DigestType</a></code> | <code>*f64</code> | Digest Type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | fingerprint. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.flags">Flags</a></code> | <code>*f64</code> | Flags for the CAA record. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.keyTag">KeyTag</a></code> | <code>*f64</code> | Key Tag. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latDegrees">LatDegrees</a></code> | <code>*f64</code> | Degrees of latitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latDirection">LatDirection</a></code> | <code>*string</code> | Latitude direction. Available values: "N", "S". |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latMinutes">LatMinutes</a></code> | <code>*f64</code> | Minutes of latitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latSeconds">LatSeconds</a></code> | <code>*f64</code> | Seconds of latitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longDegrees">LongDegrees</a></code> | <code>*f64</code> | Degrees of longitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longDirection">LongDirection</a></code> | <code>*string</code> | Longitude direction. Available values: "E", "W". |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longMinutes">LongMinutes</a></code> | <code>*f64</code> | Minutes of longitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longSeconds">LongSeconds</a></code> | <code>*f64</code> | Seconds of longitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.matchingType">MatchingType</a></code> | <code>*f64</code> | Matching Type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.order">Order</a></code> | <code>*f64</code> | Order. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.port">Port</a></code> | <code>*f64</code> | The port of the service. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.precisionHorz">PrecisionHorz</a></code> | <code>*f64</code> | Horizontal precision of location. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.precisionVert">PrecisionVert</a></code> | <code>*f64</code> | Vertical precision of location. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.preference">Preference</a></code> | <code>*f64</code> | Preference. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.priority">Priority</a></code> | <code>*f64</code> | priority. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.protocol">Protocol</a></code> | <code>*f64</code> | Protocol. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.publicKey">PublicKey</a></code> | <code>*string</code> | Public Key. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.regex">Regex</a></code> | <code>*string</code> | Regex. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.replacement">Replacement</a></code> | <code>*string</code> | Replacement. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.selector">Selector</a></code> | <code>*f64</code> | Selector. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.service">Service</a></code> | <code>*string</code> | Service. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.size">Size</a></code> | <code>*f64</code> | Size of location in meters. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.tag">Tag</a></code> | <code>*string</code> | Name of the property controlled by this record (e.g.: issue, issuewild, iodef). |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.target">Target</a></code> | <code>*string</code> | target. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.type">Type</a></code> | <code>*f64</code> | Type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.usage">Usage</a></code> | <code>*f64</code> | Usage. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.value">Value</a></code> | <code>*string</code> | Value of the record. This field's semantics depend on the chosen tag. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.weight">Weight</a></code> | <code>*f64</code> | The record weight. |

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.algorithm"></a>

```go
Algorithm *f64
```

- *Type:* *f64

Algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#algorithm DnsRecord#algorithm}

---

##### `Altitude`<sup>Optional</sup> <a name="Altitude" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.altitude"></a>

```go
Altitude *f64
```

- *Type:* *f64

Altitude of location in meters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#altitude DnsRecord#altitude}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#certificate DnsRecord#certificate}

---

##### `Digest`<sup>Optional</sup> <a name="Digest" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.digest"></a>

```go
Digest *string
```

- *Type:* *string

Digest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#digest DnsRecord#digest}

---

##### `DigestType`<sup>Optional</sup> <a name="DigestType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.digestType"></a>

```go
DigestType *f64
```

- *Type:* *f64

Digest Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#digest_type DnsRecord#digest_type}

---

##### `Fingerprint`<sup>Optional</sup> <a name="Fingerprint" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.fingerprint"></a>

```go
Fingerprint *string
```

- *Type:* *string

fingerprint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#fingerprint DnsRecord#fingerprint}

---

##### `Flags`<sup>Optional</sup> <a name="Flags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.flags"></a>

```go
Flags *f64
```

- *Type:* *f64

Flags for the CAA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#flags DnsRecord#flags}

---

##### `KeyTag`<sup>Optional</sup> <a name="KeyTag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.keyTag"></a>

```go
KeyTag *f64
```

- *Type:* *f64

Key Tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#key_tag DnsRecord#key_tag}

---

##### `LatDegrees`<sup>Optional</sup> <a name="LatDegrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latDegrees"></a>

```go
LatDegrees *f64
```

- *Type:* *f64

Degrees of latitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#lat_degrees DnsRecord#lat_degrees}

---

##### `LatDirection`<sup>Optional</sup> <a name="LatDirection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latDirection"></a>

```go
LatDirection *string
```

- *Type:* *string

Latitude direction. Available values: "N", "S".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#lat_direction DnsRecord#lat_direction}

---

##### `LatMinutes`<sup>Optional</sup> <a name="LatMinutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latMinutes"></a>

```go
LatMinutes *f64
```

- *Type:* *f64

Minutes of latitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#lat_minutes DnsRecord#lat_minutes}

---

##### `LatSeconds`<sup>Optional</sup> <a name="LatSeconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latSeconds"></a>

```go
LatSeconds *f64
```

- *Type:* *f64

Seconds of latitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#lat_seconds DnsRecord#lat_seconds}

---

##### `LongDegrees`<sup>Optional</sup> <a name="LongDegrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longDegrees"></a>

```go
LongDegrees *f64
```

- *Type:* *f64

Degrees of longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#long_degrees DnsRecord#long_degrees}

---

##### `LongDirection`<sup>Optional</sup> <a name="LongDirection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longDirection"></a>

```go
LongDirection *string
```

- *Type:* *string

Longitude direction. Available values: "E", "W".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#long_direction DnsRecord#long_direction}

---

##### `LongMinutes`<sup>Optional</sup> <a name="LongMinutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longMinutes"></a>

```go
LongMinutes *f64
```

- *Type:* *f64

Minutes of longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#long_minutes DnsRecord#long_minutes}

---

##### `LongSeconds`<sup>Optional</sup> <a name="LongSeconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longSeconds"></a>

```go
LongSeconds *f64
```

- *Type:* *f64

Seconds of longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#long_seconds DnsRecord#long_seconds}

---

##### `MatchingType`<sup>Optional</sup> <a name="MatchingType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.matchingType"></a>

```go
MatchingType *f64
```

- *Type:* *f64

Matching Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#matching_type DnsRecord#matching_type}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.order"></a>

```go
Order *f64
```

- *Type:* *f64

Order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#order DnsRecord#order}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#port DnsRecord#port}

---

##### `PrecisionHorz`<sup>Optional</sup> <a name="PrecisionHorz" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.precisionHorz"></a>

```go
PrecisionHorz *f64
```

- *Type:* *f64

Horizontal precision of location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#precision_horz DnsRecord#precision_horz}

---

##### `PrecisionVert`<sup>Optional</sup> <a name="PrecisionVert" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.precisionVert"></a>

```go
PrecisionVert *f64
```

- *Type:* *f64

Vertical precision of location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#precision_vert DnsRecord#precision_vert}

---

##### `Preference`<sup>Optional</sup> <a name="Preference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.preference"></a>

```go
Preference *f64
```

- *Type:* *f64

Preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#preference DnsRecord#preference}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#priority DnsRecord#priority}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.protocol"></a>

```go
Protocol *f64
```

- *Type:* *f64

Protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#protocol DnsRecord#protocol}

---

##### `PublicKey`<sup>Optional</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.publicKey"></a>

```go
PublicKey *string
```

- *Type:* *string

Public Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#public_key DnsRecord#public_key}

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.regex"></a>

```go
Regex *string
```

- *Type:* *string

Regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#regex DnsRecord#regex}

---

##### `Replacement`<sup>Optional</sup> <a name="Replacement" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.replacement"></a>

```go
Replacement *string
```

- *Type:* *string

Replacement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#replacement DnsRecord#replacement}

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.selector"></a>

```go
Selector *f64
```

- *Type:* *f64

Selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#selector DnsRecord#selector}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.service"></a>

```go
Service *string
```

- *Type:* *string

Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#service DnsRecord#service}

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Size of location in meters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#size DnsRecord#size}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

Name of the property controlled by this record (e.g.: issue, issuewild, iodef).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#tag DnsRecord#tag}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.target"></a>

```go
Target *string
```

- *Type:* *string

target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#target DnsRecord#target}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.type"></a>

```go
Type *f64
```

- *Type:* *f64

Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#type DnsRecord#type}

---

##### `Usage`<sup>Optional</sup> <a name="Usage" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.usage"></a>

```go
Usage *f64
```

- *Type:* *f64

Usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#usage DnsRecord#usage}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.value"></a>

```go
Value *string
```

- *Type:* *string

Value of the record. This field's semantics depend on the chosen tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#value DnsRecord#value}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

The record weight.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#weight DnsRecord#weight}

---

### DnsRecordSettings <a name="DnsRecordSettings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/dnsrecord"

&dnsrecord.DnsRecordSettings {
	FlattenCname: interface{},
	Ipv4Only: interface{},
	Ipv6Only: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.flattenCname">FlattenCname</a></code> | <code>interface{}</code> | If enabled, causes the CNAME record to be resolved externally and the resulting address records (e.g., A and AAAA) to be returned instead of the CNAME record itself. This setting is unavailable for proxied records, since they are always flattened. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.ipv4Only">Ipv4Only</a></code> | <code>interface{}</code> | When enabled, only A records will be generated, and AAAA records will not be created. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.ipv6Only">Ipv6Only</a></code> | <code>interface{}</code> | When enabled, only AAAA records will be generated, and A records will not be created. |

---

##### `FlattenCname`<sup>Optional</sup> <a name="FlattenCname" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.flattenCname"></a>

```go
FlattenCname interface{}
```

- *Type:* interface{}

If enabled, causes the CNAME record to be resolved externally and the resulting address records (e.g., A and AAAA) to be returned instead of the CNAME record itself. This setting is unavailable for proxied records, since they are always flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#flatten_cname DnsRecord#flatten_cname}

---

##### `Ipv4Only`<sup>Optional</sup> <a name="Ipv4Only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.ipv4Only"></a>

```go
Ipv4Only interface{}
```

- *Type:* interface{}

When enabled, only A records will be generated, and AAAA records will not be created.

This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#ipv4_only DnsRecord#ipv4_only}

---

##### `Ipv6Only`<sup>Optional</sup> <a name="Ipv6Only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.ipv6Only"></a>

```go
Ipv6Only interface{}
```

- *Type:* interface{}

When enabled, only AAAA records will be generated, and A records will not be created.

This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_record#ipv6_only DnsRecord#ipv6_only}

---

## Classes <a name="Classes" id="Classes"></a>

### DnsRecordDataOutputReference <a name="DnsRecordDataOutputReference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/dnsrecord"

dnsrecord.NewDnsRecordDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DnsRecordDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetAltitude">ResetAltitude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetDigest">ResetDigest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetDigestType">ResetDigestType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetFingerprint">ResetFingerprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetFlags">ResetFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetKeyTag">ResetKeyTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatDegrees">ResetLatDegrees</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatDirection">ResetLatDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatMinutes">ResetLatMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatSeconds">ResetLatSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongDegrees">ResetLongDegrees</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongDirection">ResetLongDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongMinutes">ResetLongMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongSeconds">ResetLongSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetMatchingType">ResetMatchingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPrecisionHorz">ResetPrecisionHorz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPrecisionVert">ResetPrecisionVert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPreference">ResetPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPublicKey">ResetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetReplacement">ResetReplacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetSelector">ResetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetUsage">ResetUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetAlgorithm"></a>

```go
func ResetAlgorithm()
```

##### `ResetAltitude` <a name="ResetAltitude" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetAltitude"></a>

```go
func ResetAltitude()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetDigest` <a name="ResetDigest" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetDigest"></a>

```go
func ResetDigest()
```

##### `ResetDigestType` <a name="ResetDigestType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetDigestType"></a>

```go
func ResetDigestType()
```

##### `ResetFingerprint` <a name="ResetFingerprint" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetFingerprint"></a>

```go
func ResetFingerprint()
```

##### `ResetFlags` <a name="ResetFlags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetFlags"></a>

```go
func ResetFlags()
```

##### `ResetKeyTag` <a name="ResetKeyTag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetKeyTag"></a>

```go
func ResetKeyTag()
```

##### `ResetLatDegrees` <a name="ResetLatDegrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatDegrees"></a>

```go
func ResetLatDegrees()
```

##### `ResetLatDirection` <a name="ResetLatDirection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatDirection"></a>

```go
func ResetLatDirection()
```

##### `ResetLatMinutes` <a name="ResetLatMinutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatMinutes"></a>

```go
func ResetLatMinutes()
```

##### `ResetLatSeconds` <a name="ResetLatSeconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatSeconds"></a>

```go
func ResetLatSeconds()
```

##### `ResetLongDegrees` <a name="ResetLongDegrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongDegrees"></a>

```go
func ResetLongDegrees()
```

##### `ResetLongDirection` <a name="ResetLongDirection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongDirection"></a>

```go
func ResetLongDirection()
```

##### `ResetLongMinutes` <a name="ResetLongMinutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongMinutes"></a>

```go
func ResetLongMinutes()
```

##### `ResetLongSeconds` <a name="ResetLongSeconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongSeconds"></a>

```go
func ResetLongSeconds()
```

##### `ResetMatchingType` <a name="ResetMatchingType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetMatchingType"></a>

```go
func ResetMatchingType()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPrecisionHorz` <a name="ResetPrecisionHorz" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPrecisionHorz"></a>

```go
func ResetPrecisionHorz()
```

##### `ResetPrecisionVert` <a name="ResetPrecisionVert" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPrecisionVert"></a>

```go
func ResetPrecisionVert()
```

##### `ResetPreference` <a name="ResetPreference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPreference"></a>

```go
func ResetPreference()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetPublicKey` <a name="ResetPublicKey" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPublicKey"></a>

```go
func ResetPublicKey()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetRegex"></a>

```go
func ResetRegex()
```

##### `ResetReplacement` <a name="ResetReplacement" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetReplacement"></a>

```go
func ResetReplacement()
```

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetSelector"></a>

```go
func ResetSelector()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetService"></a>

```go
func ResetService()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetSize"></a>

```go
func ResetSize()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetTag"></a>

```go
func ResetTag()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetTarget"></a>

```go
func ResetTarget()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetUsage` <a name="ResetUsage" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetUsage"></a>

```go
func ResetUsage()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.altitudeInput">AltitudeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestInput">DigestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestTypeInput">DigestTypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fingerprintInput">FingerprintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.flagsInput">FlagsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.keyTagInput">KeyTagInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDegreesInput">LatDegreesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDirectionInput">LatDirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latMinutesInput">LatMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latSecondsInput">LatSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDegreesInput">LongDegreesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDirectionInput">LongDirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longMinutesInput">LongMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longSecondsInput">LongSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.matchingTypeInput">MatchingTypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.orderInput">OrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionHorzInput">PrecisionHorzInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionVertInput">PrecisionVertInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.preferenceInput">PreferenceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.regexInput">RegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.replacementInput">ReplacementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.selectorInput">SelectorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.typeInput">TypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.usageInput">UsageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.algorithm">Algorithm</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.altitude">Altitude</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digest">Digest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestType">DigestType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.flags">Flags</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.keyTag">KeyTag</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDegrees">LatDegrees</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDirection">LatDirection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latMinutes">LatMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latSeconds">LatSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDegrees">LongDegrees</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDirection">LongDirection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longMinutes">LongMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longSeconds">LongSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.matchingType">MatchingType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.order">Order</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionHorz">PrecisionHorz</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionVert">PrecisionVert</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.preference">Preference</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.protocol">Protocol</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.replacement">Replacement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.selector">Selector</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.type">Type</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.usage">Usage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.algorithmInput"></a>

```go
func AlgorithmInput() *f64
```

- *Type:* *f64

---

##### `AltitudeInput`<sup>Optional</sup> <a name="AltitudeInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.altitudeInput"></a>

```go
func AltitudeInput() *f64
```

- *Type:* *f64

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `DigestInput`<sup>Optional</sup> <a name="DigestInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestInput"></a>

```go
func DigestInput() *string
```

- *Type:* *string

---

##### `DigestTypeInput`<sup>Optional</sup> <a name="DigestTypeInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestTypeInput"></a>

```go
func DigestTypeInput() *f64
```

- *Type:* *f64

---

##### `FingerprintInput`<sup>Optional</sup> <a name="FingerprintInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fingerprintInput"></a>

```go
func FingerprintInput() *string
```

- *Type:* *string

---

##### `FlagsInput`<sup>Optional</sup> <a name="FlagsInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.flagsInput"></a>

```go
func FlagsInput() *f64
```

- *Type:* *f64

---

##### `KeyTagInput`<sup>Optional</sup> <a name="KeyTagInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.keyTagInput"></a>

```go
func KeyTagInput() *f64
```

- *Type:* *f64

---

##### `LatDegreesInput`<sup>Optional</sup> <a name="LatDegreesInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDegreesInput"></a>

```go
func LatDegreesInput() *f64
```

- *Type:* *f64

---

##### `LatDirectionInput`<sup>Optional</sup> <a name="LatDirectionInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDirectionInput"></a>

```go
func LatDirectionInput() *string
```

- *Type:* *string

---

##### `LatMinutesInput`<sup>Optional</sup> <a name="LatMinutesInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latMinutesInput"></a>

```go
func LatMinutesInput() *f64
```

- *Type:* *f64

---

##### `LatSecondsInput`<sup>Optional</sup> <a name="LatSecondsInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latSecondsInput"></a>

```go
func LatSecondsInput() *f64
```

- *Type:* *f64

---

##### `LongDegreesInput`<sup>Optional</sup> <a name="LongDegreesInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDegreesInput"></a>

```go
func LongDegreesInput() *f64
```

- *Type:* *f64

---

##### `LongDirectionInput`<sup>Optional</sup> <a name="LongDirectionInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDirectionInput"></a>

```go
func LongDirectionInput() *string
```

- *Type:* *string

---

##### `LongMinutesInput`<sup>Optional</sup> <a name="LongMinutesInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longMinutesInput"></a>

```go
func LongMinutesInput() *f64
```

- *Type:* *f64

---

##### `LongSecondsInput`<sup>Optional</sup> <a name="LongSecondsInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longSecondsInput"></a>

```go
func LongSecondsInput() *f64
```

- *Type:* *f64

---

##### `MatchingTypeInput`<sup>Optional</sup> <a name="MatchingTypeInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.matchingTypeInput"></a>

```go
func MatchingTypeInput() *f64
```

- *Type:* *f64

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.orderInput"></a>

```go
func OrderInput() *f64
```

- *Type:* *f64

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PrecisionHorzInput`<sup>Optional</sup> <a name="PrecisionHorzInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionHorzInput"></a>

```go
func PrecisionHorzInput() *f64
```

- *Type:* *f64

---

##### `PrecisionVertInput`<sup>Optional</sup> <a name="PrecisionVertInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionVertInput"></a>

```go
func PrecisionVertInput() *f64
```

- *Type:* *f64

---

##### `PreferenceInput`<sup>Optional</sup> <a name="PreferenceInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.preferenceInput"></a>

```go
func PreferenceInput() *f64
```

- *Type:* *f64

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *f64
```

- *Type:* *f64

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.publicKeyInput"></a>

```go
func PublicKeyInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.regexInput"></a>

```go
func RegexInput() *string
```

- *Type:* *string

---

##### `ReplacementInput`<sup>Optional</sup> <a name="ReplacementInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.replacementInput"></a>

```go
func ReplacementInput() *string
```

- *Type:* *string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.selectorInput"></a>

```go
func SelectorInput() *f64
```

- *Type:* *f64

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.typeInput"></a>

```go
func TypeInput() *f64
```

- *Type:* *f64

---

##### `UsageInput`<sup>Optional</sup> <a name="UsageInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.usageInput"></a>

```go
func UsageInput() *f64
```

- *Type:* *f64

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.algorithm"></a>

```go
func Algorithm() *f64
```

- *Type:* *f64

---

##### `Altitude`<sup>Required</sup> <a name="Altitude" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.altitude"></a>

```go
func Altitude() *f64
```

- *Type:* *f64

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digest"></a>

```go
func Digest() *string
```

- *Type:* *string

---

##### `DigestType`<sup>Required</sup> <a name="DigestType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestType"></a>

```go
func DigestType() *f64
```

- *Type:* *f64

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `Flags`<sup>Required</sup> <a name="Flags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.flags"></a>

```go
func Flags() *f64
```

- *Type:* *f64

---

##### `KeyTag`<sup>Required</sup> <a name="KeyTag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.keyTag"></a>

```go
func KeyTag() *f64
```

- *Type:* *f64

---

##### `LatDegrees`<sup>Required</sup> <a name="LatDegrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDegrees"></a>

```go
func LatDegrees() *f64
```

- *Type:* *f64

---

##### `LatDirection`<sup>Required</sup> <a name="LatDirection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDirection"></a>

```go
func LatDirection() *string
```

- *Type:* *string

---

##### `LatMinutes`<sup>Required</sup> <a name="LatMinutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latMinutes"></a>

```go
func LatMinutes() *f64
```

- *Type:* *f64

---

##### `LatSeconds`<sup>Required</sup> <a name="LatSeconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latSeconds"></a>

```go
func LatSeconds() *f64
```

- *Type:* *f64

---

##### `LongDegrees`<sup>Required</sup> <a name="LongDegrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDegrees"></a>

```go
func LongDegrees() *f64
```

- *Type:* *f64

---

##### `LongDirection`<sup>Required</sup> <a name="LongDirection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDirection"></a>

```go
func LongDirection() *string
```

- *Type:* *string

---

##### `LongMinutes`<sup>Required</sup> <a name="LongMinutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longMinutes"></a>

```go
func LongMinutes() *f64
```

- *Type:* *f64

---

##### `LongSeconds`<sup>Required</sup> <a name="LongSeconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longSeconds"></a>

```go
func LongSeconds() *f64
```

- *Type:* *f64

---

##### `MatchingType`<sup>Required</sup> <a name="MatchingType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.matchingType"></a>

```go
func MatchingType() *f64
```

- *Type:* *f64

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.order"></a>

```go
func Order() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PrecisionHorz`<sup>Required</sup> <a name="PrecisionHorz" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionHorz"></a>

```go
func PrecisionHorz() *f64
```

- *Type:* *f64

---

##### `PrecisionVert`<sup>Required</sup> <a name="PrecisionVert" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionVert"></a>

```go
func PrecisionVert() *f64
```

- *Type:* *f64

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.preference"></a>

```go
func Preference() *f64
```

- *Type:* *f64

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.protocol"></a>

```go
func Protocol() *f64
```

- *Type:* *f64

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `Replacement`<sup>Required</sup> <a name="Replacement" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.replacement"></a>

```go
func Replacement() *string
```

- *Type:* *string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.selector"></a>

```go
func Selector() *f64
```

- *Type:* *f64

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.type"></a>

```go
func Type() *f64
```

- *Type:* *f64

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.usage"></a>

```go
func Usage() *f64
```

- *Type:* *f64

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsRecordSettingsOutputReference <a name="DnsRecordSettingsOutputReference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v12/dnsrecord"

dnsrecord.NewDnsRecordSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DnsRecordSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetFlattenCname">ResetFlattenCname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetIpv4Only">ResetIpv4Only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetIpv6Only">ResetIpv6Only</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFlattenCname` <a name="ResetFlattenCname" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetFlattenCname"></a>

```go
func ResetFlattenCname()
```

##### `ResetIpv4Only` <a name="ResetIpv4Only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetIpv4Only"></a>

```go
func ResetIpv4Only()
```

##### `ResetIpv6Only` <a name="ResetIpv6Only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetIpv6Only"></a>

```go
func ResetIpv6Only()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.flattenCnameInput">FlattenCnameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv4OnlyInput">Ipv4OnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv6OnlyInput">Ipv6OnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.flattenCname">FlattenCname</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv4Only">Ipv4Only</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv6Only">Ipv6Only</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FlattenCnameInput`<sup>Optional</sup> <a name="FlattenCnameInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.flattenCnameInput"></a>

```go
func FlattenCnameInput() interface{}
```

- *Type:* interface{}

---

##### `Ipv4OnlyInput`<sup>Optional</sup> <a name="Ipv4OnlyInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv4OnlyInput"></a>

```go
func Ipv4OnlyInput() interface{}
```

- *Type:* interface{}

---

##### `Ipv6OnlyInput`<sup>Optional</sup> <a name="Ipv6OnlyInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv6OnlyInput"></a>

```go
func Ipv6OnlyInput() interface{}
```

- *Type:* interface{}

---

##### `FlattenCname`<sup>Required</sup> <a name="FlattenCname" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.flattenCname"></a>

```go
func FlattenCname() interface{}
```

- *Type:* interface{}

---

##### `Ipv4Only`<sup>Required</sup> <a name="Ipv4Only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv4Only"></a>

```go
func Ipv4Only() interface{}
```

- *Type:* interface{}

---

##### `Ipv6Only`<sup>Required</sup> <a name="Ipv6Only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv6Only"></a>

```go
func Ipv6Only() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



