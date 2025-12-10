# `dnsZoneTransfersIncoming` Submodule <a name="`dnsZoneTransfersIncoming` Submodule" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsZoneTransfersIncoming <a name="DnsZoneTransfersIncoming" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/dns_zone_transfers_incoming cloudflare_dns_zone_transfers_incoming}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/dnszonetransfersincoming"

dnszonetransfersincoming.NewDnsZoneTransfersIncoming(scope Construct, id *string, config DnsZoneTransfersIncomingConfig) DnsZoneTransfersIncoming
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig">DnsZoneTransfersIncomingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig">DnsZoneTransfersIncomingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.resetAutoRefreshSeconds">ResetAutoRefreshSeconds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAutoRefreshSeconds` <a name="ResetAutoRefreshSeconds" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.resetAutoRefreshSeconds"></a>

```go
func ResetAutoRefreshSeconds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DnsZoneTransfersIncoming resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/dnszonetransfersincoming"

dnszonetransfersincoming.DnsZoneTransfersIncoming_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/dnszonetransfersincoming"

dnszonetransfersincoming.DnsZoneTransfersIncoming_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/dnszonetransfersincoming"

dnszonetransfersincoming.DnsZoneTransfersIncoming_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/dnszonetransfersincoming"

dnszonetransfersincoming.DnsZoneTransfersIncoming_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DnsZoneTransfersIncoming resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DnsZoneTransfersIncoming to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DnsZoneTransfersIncoming that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/dns_zone_transfers_incoming#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DnsZoneTransfersIncoming to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.checkedTime">CheckedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.modifiedTime">ModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.soaSerial">SoaSerial</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.autoRefreshSecondsInput">AutoRefreshSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.peersInput">PeersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.autoRefreshSeconds">AutoRefreshSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.peers">Peers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CheckedTime`<sup>Required</sup> <a name="CheckedTime" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.checkedTime"></a>

```go
func CheckedTime() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModifiedTime`<sup>Required</sup> <a name="ModifiedTime" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.modifiedTime"></a>

```go
func ModifiedTime() *string
```

- *Type:* *string

---

##### `SoaSerial`<sup>Required</sup> <a name="SoaSerial" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.soaSerial"></a>

```go
func SoaSerial() *f64
```

- *Type:* *f64

---

##### `AutoRefreshSecondsInput`<sup>Optional</sup> <a name="AutoRefreshSecondsInput" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.autoRefreshSecondsInput"></a>

```go
func AutoRefreshSecondsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PeersInput`<sup>Optional</sup> <a name="PeersInput" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.peersInput"></a>

```go
func PeersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `AutoRefreshSeconds`<sup>Required</sup> <a name="AutoRefreshSeconds" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.autoRefreshSeconds"></a>

```go
func AutoRefreshSeconds() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Peers`<sup>Required</sup> <a name="Peers" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.peers"></a>

```go
func Peers() *[]*string
```

- *Type:* *[]*string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncoming.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsZoneTransfersIncomingConfig <a name="DnsZoneTransfersIncomingConfig" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/dnszonetransfersincoming"

&dnszonetransfersincoming.DnsZoneTransfersIncomingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Peers: *[]*string,
	ZoneId: *string,
	AutoRefreshSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.name">Name</a></code> | <code>*string</code> | Zone name. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.peers">Peers</a></code> | <code>*[]*string</code> | A list of peer tags. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/dns_zone_transfers_incoming#zone_id DnsZoneTransfersIncoming#zone_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.autoRefreshSeconds">AutoRefreshSeconds</a></code> | <code>*f64</code> | How often should a secondary zone auto refresh regardless of DNS NOTIFY. Not applicable for primary zones. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/dns_zone_transfers_incoming#name DnsZoneTransfersIncoming#name}

---

##### `Peers`<sup>Required</sup> <a name="Peers" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.peers"></a>

```go
Peers *[]*string
```

- *Type:* *[]*string

A list of peer tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/dns_zone_transfers_incoming#peers DnsZoneTransfersIncoming#peers}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/dns_zone_transfers_incoming#zone_id DnsZoneTransfersIncoming#zone_id}.

---

##### `AutoRefreshSeconds`<sup>Optional</sup> <a name="AutoRefreshSeconds" id="@cdktf/provider-cloudflare.dnsZoneTransfersIncoming.DnsZoneTransfersIncomingConfig.property.autoRefreshSeconds"></a>

```go
AutoRefreshSeconds *f64
```

- *Type:* *f64

How often should a secondary zone auto refresh regardless of DNS NOTIFY. Not applicable for primary zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/dns_zone_transfers_incoming#auto_refresh_seconds DnsZoneTransfersIncoming#auto_refresh_seconds}

---



