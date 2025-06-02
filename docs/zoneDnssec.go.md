# `zoneDnssec` Submodule <a name="`zoneDnssec` Submodule" id="@cdktf/provider-cloudflare.zoneDnssec"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZoneDnssec <a name="ZoneDnssec" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dnssec cloudflare_zone_dnssec}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zonednssec"

zonednssec.NewZoneDnssec(scope Construct, id *string, config ZoneDnssecConfig) ZoneDnssec
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig">ZoneDnssecConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig">ZoneDnssecConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.resetDnssecMultiSigner">ResetDnssecMultiSigner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.resetDnssecPresigned">ResetDnssecPresigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.resetDnssecUseNsec3">ResetDnssecUseNsec3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDnssecMultiSigner` <a name="ResetDnssecMultiSigner" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.resetDnssecMultiSigner"></a>

```go
func ResetDnssecMultiSigner()
```

##### `ResetDnssecPresigned` <a name="ResetDnssecPresigned" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.resetDnssecPresigned"></a>

```go
func ResetDnssecPresigned()
```

##### `ResetDnssecUseNsec3` <a name="ResetDnssecUseNsec3" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.resetDnssecUseNsec3"></a>

```go
func ResetDnssecUseNsec3()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.resetStatus"></a>

```go
func ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZoneDnssec resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zonednssec"

zonednssec.ZoneDnssec_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zonednssec"

zonednssec.ZoneDnssec_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zonednssec"

zonednssec.ZoneDnssec_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zonednssec"

zonednssec.ZoneDnssec_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ZoneDnssec resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZoneDnssec to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZoneDnssec that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dnssec#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ZoneDnssec to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.digest">Digest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.digestAlgorithm">DigestAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.digestType">DigestType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.ds">Ds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.flags">Flags</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.keyTag">KeyTag</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecMultiSignerInput">DnssecMultiSignerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecPresignedInput">DnssecPresignedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecUseNsec3Input">DnssecUseNsec3Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecMultiSigner">DnssecMultiSigner</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecPresigned">DnssecPresigned</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecUseNsec3">DnssecUseNsec3</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.digest"></a>

```go
func Digest() *string
```

- *Type:* *string

---

##### `DigestAlgorithm`<sup>Required</sup> <a name="DigestAlgorithm" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.digestAlgorithm"></a>

```go
func DigestAlgorithm() *string
```

- *Type:* *string

---

##### `DigestType`<sup>Required</sup> <a name="DigestType" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.digestType"></a>

```go
func DigestType() *string
```

- *Type:* *string

---

##### `Ds`<sup>Required</sup> <a name="Ds" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.ds"></a>

```go
func Ds() *string
```

- *Type:* *string

---

##### `Flags`<sup>Required</sup> <a name="Flags" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.flags"></a>

```go
func Flags() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyTag`<sup>Required</sup> <a name="KeyTag" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.keyTag"></a>

```go
func KeyTag() *f64
```

- *Type:* *f64

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `DnssecMultiSignerInput`<sup>Optional</sup> <a name="DnssecMultiSignerInput" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecMultiSignerInput"></a>

```go
func DnssecMultiSignerInput() interface{}
```

- *Type:* interface{}

---

##### `DnssecPresignedInput`<sup>Optional</sup> <a name="DnssecPresignedInput" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecPresignedInput"></a>

```go
func DnssecPresignedInput() interface{}
```

- *Type:* interface{}

---

##### `DnssecUseNsec3Input`<sup>Optional</sup> <a name="DnssecUseNsec3Input" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecUseNsec3Input"></a>

```go
func DnssecUseNsec3Input() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `DnssecMultiSigner`<sup>Required</sup> <a name="DnssecMultiSigner" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecMultiSigner"></a>

```go
func DnssecMultiSigner() interface{}
```

- *Type:* interface{}

---

##### `DnssecPresigned`<sup>Required</sup> <a name="DnssecPresigned" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecPresigned"></a>

```go
func DnssecPresigned() interface{}
```

- *Type:* interface{}

---

##### `DnssecUseNsec3`<sup>Required</sup> <a name="DnssecUseNsec3" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.dnssecUseNsec3"></a>

```go
func DnssecUseNsec3() interface{}
```

- *Type:* interface{}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssec.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZoneDnssecConfig <a name="ZoneDnssecConfig" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zonednssec"

&zonednssec.ZoneDnssecConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ZoneId: *string,
	DnssecMultiSigner: interface{},
	DnssecPresigned: interface{},
	DnssecUseNsec3: interface{},
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.dnssecMultiSigner">DnssecMultiSigner</a></code> | <code>interface{}</code> | If true, multi-signer DNSSEC is enabled on the zone, allowing multiple providers to serve a DNSSEC-signed zone at the same time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.dnssecPresigned">DnssecPresigned</a></code> | <code>interface{}</code> | If true, allows Cloudflare to transfer in a DNSSEC-signed zone including signatures from an external provider, without requiring Cloudflare to sign any records on the fly. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.dnssecUseNsec3">DnssecUseNsec3</a></code> | <code>interface{}</code> | If true, enables the use of NSEC3 together with DNSSEC on the zone. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.status">Status</a></code> | <code>*string</code> | Status of DNSSEC, based on user-desired state and presence of necessary records. Available values: "active", "disabled". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dnssec#zone_id ZoneDnssec#zone_id}

---

##### `DnssecMultiSigner`<sup>Optional</sup> <a name="DnssecMultiSigner" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.dnssecMultiSigner"></a>

```go
DnssecMultiSigner interface{}
```

- *Type:* interface{}

If true, multi-signer DNSSEC is enabled on the zone, allowing multiple providers to serve a DNSSEC-signed zone at the same time.

This is required for DNSKEY records (except those automatically
generated by Cloudflare) to be added to the zone.

See [Multi-signer DNSSEC](https://developers.cloudflare.com/dns/dnssec/multi-signer-dnssec/) for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dnssec#dnssec_multi_signer ZoneDnssec#dnssec_multi_signer}

---

##### `DnssecPresigned`<sup>Optional</sup> <a name="DnssecPresigned" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.dnssecPresigned"></a>

```go
DnssecPresigned interface{}
```

- *Type:* interface{}

If true, allows Cloudflare to transfer in a DNSSEC-signed zone including signatures from an external provider, without requiring Cloudflare to sign any records on the fly.

Note that this feature has some limitations.
See [Cloudflare as Secondary](https://developers.cloudflare.com/dns/zone-setups/zone-transfers/cloudflare-as-secondary/setup/#dnssec) for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dnssec#dnssec_presigned ZoneDnssec#dnssec_presigned}

---

##### `DnssecUseNsec3`<sup>Optional</sup> <a name="DnssecUseNsec3" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.dnssecUseNsec3"></a>

```go
DnssecUseNsec3 interface{}
```

- *Type:* interface{}

If true, enables the use of NSEC3 together with DNSSEC on the zone.

Combined with setting dnssec_presigned to true, this enables the use of
NSEC3 records when transferring in from an external provider.
If dnssec_presigned is instead set to false (default), NSEC3 records will be
generated and signed at request time.

See [DNSSEC with NSEC3](https://developers.cloudflare.com/dns/dnssec/enable-nsec3/) for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dnssec#dnssec_use_nsec3 ZoneDnssec#dnssec_use_nsec3}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-cloudflare.zoneDnssec.ZoneDnssecConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Status of DNSSEC, based on user-desired state and presence of necessary records. Available values: "active", "disabled".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dnssec#status ZoneDnssec#status}

---



