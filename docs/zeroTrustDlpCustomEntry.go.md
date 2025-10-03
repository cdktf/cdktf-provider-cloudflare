# `zeroTrustDlpCustomEntry` Submodule <a name="`zeroTrustDlpCustomEntry` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDlpCustomEntry <a name="ZeroTrustDlpCustomEntry" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dlp_custom_entry cloudflare_zero_trust_dlp_custom_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdlpcustomentry"

zerotrustdlpcustomentry.NewZeroTrustDlpCustomEntry(scope Construct, id *string, config ZeroTrustDlpCustomEntryConfig) ZeroTrustDlpCustomEntry
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig">ZeroTrustDlpCustomEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig">ZeroTrustDlpCustomEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.putPattern">PutPattern</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPattern` <a name="PutPattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.putPattern"></a>

```go
func PutPattern(value ZeroTrustDlpCustomEntryPattern)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.putPattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern">ZeroTrustDlpCustomEntryPattern</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDlpCustomEntry resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdlpcustomentry"

zerotrustdlpcustomentry.ZeroTrustDlpCustomEntry_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdlpcustomentry"

zerotrustdlpcustomentry.ZeroTrustDlpCustomEntry_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdlpcustomentry"

zerotrustdlpcustomentry.ZeroTrustDlpCustomEntry_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdlpcustomentry"

zerotrustdlpcustomentry.ZeroTrustDlpCustomEntry_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ZeroTrustDlpCustomEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZeroTrustDlpCustomEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZeroTrustDlpCustomEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dlp_custom_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDlpCustomEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.caseSensitive">CaseSensitive</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.confidence">Confidence</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference">ZeroTrustDlpCustomEntryConfidenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.pattern">Pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference">ZeroTrustDlpCustomEntryPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.secret">Secret</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.variant">Variant</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference">ZeroTrustDlpCustomEntryVariantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.wordList">WordList</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.patternInput">PatternInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.profileIdInput">ProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.profileId">ProfileId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CaseSensitive`<sup>Required</sup> <a name="CaseSensitive" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.caseSensitive"></a>

```go
func CaseSensitive() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Confidence`<sup>Required</sup> <a name="Confidence" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.confidence"></a>

```go
func Confidence() ZeroTrustDlpCustomEntryConfidenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference">ZeroTrustDlpCustomEntryConfidenceOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.pattern"></a>

```go
func Pattern() ZeroTrustDlpCustomEntryPatternOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference">ZeroTrustDlpCustomEntryPatternOutputReference</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.secret"></a>

```go
func Secret() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Variant`<sup>Required</sup> <a name="Variant" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.variant"></a>

```go
func Variant() ZeroTrustDlpCustomEntryVariantOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference">ZeroTrustDlpCustomEntryVariantOutputReference</a>

---

##### `WordList`<sup>Required</sup> <a name="WordList" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.wordList"></a>

```go
func WordList() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.patternInput"></a>

```go
func PatternInput() interface{}
```

- *Type:* interface{}

---

##### `ProfileIdInput`<sup>Optional</sup> <a name="ProfileIdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.profileIdInput"></a>

```go
func ProfileIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.profileId"></a>

```go
func ProfileId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDlpCustomEntryConfidence <a name="ZeroTrustDlpCustomEntryConfidence" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidence.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdlpcustomentry"

&zerotrustdlpcustomentry.ZeroTrustDlpCustomEntryConfidence {

}
```


### ZeroTrustDlpCustomEntryConfig <a name="ZeroTrustDlpCustomEntryConfig" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdlpcustomentry"

&zerotrustdlpcustomentry.ZeroTrustDlpCustomEntryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Enabled: interface{},
	Name: *string,
	Pattern: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern,
	ProfileId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dlp_custom_entry#account_id ZeroTrustDlpCustomEntry#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dlp_custom_entry#enabled ZeroTrustDlpCustomEntry#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dlp_custom_entry#name ZeroTrustDlpCustomEntry#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.pattern">Pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern">ZeroTrustDlpCustomEntryPattern</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dlp_custom_entry#pattern ZeroTrustDlpCustomEntry#pattern}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.profileId">ProfileId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dlp_custom_entry#profile_id ZeroTrustDlpCustomEntry#profile_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dlp_custom_entry#account_id ZeroTrustDlpCustomEntry#account_id}.

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dlp_custom_entry#enabled ZeroTrustDlpCustomEntry#enabled}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dlp_custom_entry#name ZeroTrustDlpCustomEntry#name}.

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.pattern"></a>

```go
Pattern ZeroTrustDlpCustomEntryPattern
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern">ZeroTrustDlpCustomEntryPattern</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dlp_custom_entry#pattern ZeroTrustDlpCustomEntry#pattern}.

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.profileId"></a>

```go
ProfileId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dlp_custom_entry#profile_id ZeroTrustDlpCustomEntry#profile_id}.

---

### ZeroTrustDlpCustomEntryPattern <a name="ZeroTrustDlpCustomEntryPattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdlpcustomentry"

&zerotrustdlpcustomentry.ZeroTrustDlpCustomEntryPattern {
	Regex: *string,
	Validation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern.property.regex">Regex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dlp_custom_entry#regex ZeroTrustDlpCustomEntry#regex}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern.property.validation">Validation</a></code> | <code>*string</code> | Available values: "luhn". |

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern.property.regex"></a>

```go
Regex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dlp_custom_entry#regex ZeroTrustDlpCustomEntry#regex}.

---

##### `Validation`<sup>Optional</sup> <a name="Validation" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern.property.validation"></a>

```go
Validation *string
```

- *Type:* *string

Available values: "luhn".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dlp_custom_entry#validation ZeroTrustDlpCustomEntry#validation}

---

### ZeroTrustDlpCustomEntryVariant <a name="ZeroTrustDlpCustomEntryVariant" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariant.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdlpcustomentry"

&zerotrustdlpcustomentry.ZeroTrustDlpCustomEntryVariant {

}
```


## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDlpCustomEntryConfidenceOutputReference <a name="ZeroTrustDlpCustomEntryConfidenceOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdlpcustomentry"

zerotrustdlpcustomentry.NewZeroTrustDlpCustomEntryConfidenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustDlpCustomEntryConfidenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.aiContextAvailable">AiContextAvailable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.available">Available</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidence">ZeroTrustDlpCustomEntryConfidence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AiContextAvailable`<sup>Required</sup> <a name="AiContextAvailable" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.aiContextAvailable"></a>

```go
func AiContextAvailable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Available`<sup>Required</sup> <a name="Available" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.available"></a>

```go
func Available() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustDlpCustomEntryConfidence
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidence">ZeroTrustDlpCustomEntryConfidence</a>

---


### ZeroTrustDlpCustomEntryPatternOutputReference <a name="ZeroTrustDlpCustomEntryPatternOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdlpcustomentry"

zerotrustdlpcustomentry.NewZeroTrustDlpCustomEntryPatternOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustDlpCustomEntryPatternOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.resetValidation">ResetValidation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValidation` <a name="ResetValidation" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.resetValidation"></a>

```go
func ResetValidation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.regexInput">RegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.validationInput">ValidationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.validation">Validation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.regexInput"></a>

```go
func RegexInput() *string
```

- *Type:* *string

---

##### `ValidationInput`<sup>Optional</sup> <a name="ValidationInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.validationInput"></a>

```go
func ValidationInput() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `Validation`<sup>Required</sup> <a name="Validation" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.validation"></a>

```go
func Validation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustDlpCustomEntryVariantOutputReference <a name="ZeroTrustDlpCustomEntryVariantOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdlpcustomentry"

zerotrustdlpcustomentry.NewZeroTrustDlpCustomEntryVariantOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustDlpCustomEntryVariantOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.property.topicType">TopicType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariant">ZeroTrustDlpCustomEntryVariant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `TopicType`<sup>Required</sup> <a name="TopicType" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.property.topicType"></a>

```go
func TopicType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariantOutputReference.property.internalValue"></a>

```go
func InternalValue() ZeroTrustDlpCustomEntryVariant
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryVariant">ZeroTrustDlpCustomEntryVariant</a>

---



