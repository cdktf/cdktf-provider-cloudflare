# `zoneCacheVariants` Submodule <a name="`zoneCacheVariants` Submodule" id="@cdktf/provider-cloudflare.zoneCacheVariants"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZoneCacheVariants <a name="ZoneCacheVariants" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zone_cache_variants cloudflare_zone_cache_variants}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zonecachevariants"

zonecachevariants.NewZoneCacheVariants(scope Construct, id *string, config ZoneCacheVariantsConfig) ZoneCacheVariants
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig">ZoneCacheVariantsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig">ZoneCacheVariantsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.putValue">PutValue</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutValue` <a name="PutValue" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.putValue"></a>

```go
func PutValue(value ZoneCacheVariantsValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZoneCacheVariants resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zonecachevariants"

zonecachevariants.ZoneCacheVariants_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zonecachevariants"

zonecachevariants.ZoneCacheVariants_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zonecachevariants"

zonecachevariants.ZoneCacheVariants_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zonecachevariants"

zonecachevariants.ZoneCacheVariants_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ZoneCacheVariants resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZoneCacheVariants to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZoneCacheVariants that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zone_cache_variants#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ZoneCacheVariants to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.editable">Editable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.value">Value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference">ZoneCacheVariantsValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Editable`<sup>Required</sup> <a name="Editable" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.editable"></a>

```go
func Editable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.value"></a>

```go
func Value() ZoneCacheVariantsValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference">ZoneCacheVariantsValueOutputReference</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZoneCacheVariantsConfig <a name="ZoneCacheVariantsConfig" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zonecachevariants"

&zonecachevariants.ZoneCacheVariantsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Value: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.zoneCacheVariants.ZoneCacheVariantsValue,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.value">Value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a></code> | Value of the zone setting. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.value"></a>

```go
Value ZoneCacheVariantsValue
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue">ZoneCacheVariantsValue</a>

Value of the zone setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zone_cache_variants#value ZoneCacheVariants#value}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zone_cache_variants#zone_id ZoneCacheVariants#zone_id}

---

### ZoneCacheVariantsValue <a name="ZoneCacheVariantsValue" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zonecachevariants"

&zonecachevariants.ZoneCacheVariantsValue {
	Avif: *[]*string,
	Bmp: *[]*string,
	Gif: *[]*string,
	Jp2: *[]*string,
	Jpeg: *[]*string,
	Jpg: *[]*string,
	Jpg2: *[]*string,
	Png: *[]*string,
	Tif: *[]*string,
	Tiff: *[]*string,
	Webp: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.avif">Avif</a></code> | <code>*[]*string</code> | List of strings with the MIME types of all the variants that should be served for avif. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.bmp">Bmp</a></code> | <code>*[]*string</code> | List of strings with the MIME types of all the variants that should be served for bmp. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.gif">Gif</a></code> | <code>*[]*string</code> | List of strings with the MIME types of all the variants that should be served for gif. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jp2">Jp2</a></code> | <code>*[]*string</code> | List of strings with the MIME types of all the variants that should be served for jp2. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpeg">Jpeg</a></code> | <code>*[]*string</code> | List of strings with the MIME types of all the variants that should be served for jpeg. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpg">Jpg</a></code> | <code>*[]*string</code> | List of strings with the MIME types of all the variants that should be served for jpg. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpg2">Jpg2</a></code> | <code>*[]*string</code> | List of strings with the MIME types of all the variants that should be served for jpg2. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.png">Png</a></code> | <code>*[]*string</code> | List of strings with the MIME types of all the variants that should be served for png. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.tif">Tif</a></code> | <code>*[]*string</code> | List of strings with the MIME types of all the variants that should be served for tif. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.tiff">Tiff</a></code> | <code>*[]*string</code> | List of strings with the MIME types of all the variants that should be served for tiff. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.webp">Webp</a></code> | <code>*[]*string</code> | List of strings with the MIME types of all the variants that should be served for webp. |

---

##### `Avif`<sup>Optional</sup> <a name="Avif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.avif"></a>

```go
Avif *[]*string
```

- *Type:* *[]*string

List of strings with the MIME types of all the variants that should be served for avif.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zone_cache_variants#avif ZoneCacheVariants#avif}

---

##### `Bmp`<sup>Optional</sup> <a name="Bmp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.bmp"></a>

```go
Bmp *[]*string
```

- *Type:* *[]*string

List of strings with the MIME types of all the variants that should be served for bmp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zone_cache_variants#bmp ZoneCacheVariants#bmp}

---

##### `Gif`<sup>Optional</sup> <a name="Gif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.gif"></a>

```go
Gif *[]*string
```

- *Type:* *[]*string

List of strings with the MIME types of all the variants that should be served for gif.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zone_cache_variants#gif ZoneCacheVariants#gif}

---

##### `Jp2`<sup>Optional</sup> <a name="Jp2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jp2"></a>

```go
Jp2 *[]*string
```

- *Type:* *[]*string

List of strings with the MIME types of all the variants that should be served for jp2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zone_cache_variants#jp2 ZoneCacheVariants#jp2}

---

##### `Jpeg`<sup>Optional</sup> <a name="Jpeg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpeg"></a>

```go
Jpeg *[]*string
```

- *Type:* *[]*string

List of strings with the MIME types of all the variants that should be served for jpeg.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zone_cache_variants#jpeg ZoneCacheVariants#jpeg}

---

##### `Jpg`<sup>Optional</sup> <a name="Jpg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpg"></a>

```go
Jpg *[]*string
```

- *Type:* *[]*string

List of strings with the MIME types of all the variants that should be served for jpg.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zone_cache_variants#jpg ZoneCacheVariants#jpg}

---

##### `Jpg2`<sup>Optional</sup> <a name="Jpg2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.jpg2"></a>

```go
Jpg2 *[]*string
```

- *Type:* *[]*string

List of strings with the MIME types of all the variants that should be served for jpg2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zone_cache_variants#jpg2 ZoneCacheVariants#jpg2}

---

##### `Png`<sup>Optional</sup> <a name="Png" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.png"></a>

```go
Png *[]*string
```

- *Type:* *[]*string

List of strings with the MIME types of all the variants that should be served for png.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zone_cache_variants#png ZoneCacheVariants#png}

---

##### `Tif`<sup>Optional</sup> <a name="Tif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.tif"></a>

```go
Tif *[]*string
```

- *Type:* *[]*string

List of strings with the MIME types of all the variants that should be served for tif.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zone_cache_variants#tif ZoneCacheVariants#tif}

---

##### `Tiff`<sup>Optional</sup> <a name="Tiff" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.tiff"></a>

```go
Tiff *[]*string
```

- *Type:* *[]*string

List of strings with the MIME types of all the variants that should be served for tiff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zone_cache_variants#tiff ZoneCacheVariants#tiff}

---

##### `Webp`<sup>Optional</sup> <a name="Webp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValue.property.webp"></a>

```go
Webp *[]*string
```

- *Type:* *[]*string

List of strings with the MIME types of all the variants that should be served for webp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zone_cache_variants#webp ZoneCacheVariants#webp}

---

## Classes <a name="Classes" id="Classes"></a>

### ZoneCacheVariantsValueOutputReference <a name="ZoneCacheVariantsValueOutputReference" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zonecachevariants"

zonecachevariants.NewZoneCacheVariantsValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZoneCacheVariantsValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetAvif">ResetAvif</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetBmp">ResetBmp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetGif">ResetGif</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJp2">ResetJp2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpeg">ResetJpeg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpg">ResetJpg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpg2">ResetJpg2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetPng">ResetPng</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetTif">ResetTif</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetTiff">ResetTiff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetWebp">ResetWebp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvif` <a name="ResetAvif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetAvif"></a>

```go
func ResetAvif()
```

##### `ResetBmp` <a name="ResetBmp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetBmp"></a>

```go
func ResetBmp()
```

##### `ResetGif` <a name="ResetGif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetGif"></a>

```go
func ResetGif()
```

##### `ResetJp2` <a name="ResetJp2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJp2"></a>

```go
func ResetJp2()
```

##### `ResetJpeg` <a name="ResetJpeg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpeg"></a>

```go
func ResetJpeg()
```

##### `ResetJpg` <a name="ResetJpg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpg"></a>

```go
func ResetJpg()
```

##### `ResetJpg2` <a name="ResetJpg2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetJpg2"></a>

```go
func ResetJpg2()
```

##### `ResetPng` <a name="ResetPng" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetPng"></a>

```go
func ResetPng()
```

##### `ResetTif` <a name="ResetTif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetTif"></a>

```go
func ResetTif()
```

##### `ResetTiff` <a name="ResetTiff" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetTiff"></a>

```go
func ResetTiff()
```

##### `ResetWebp` <a name="ResetWebp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.resetWebp"></a>

```go
func ResetWebp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.avifInput">AvifInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.bmpInput">BmpInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.gifInput">GifInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jp2Input">Jp2Input</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpegInput">JpegInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg2Input">Jpg2Input</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpgInput">JpgInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.pngInput">PngInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tiffInput">TiffInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tifInput">TifInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.webpInput">WebpInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.avif">Avif</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.bmp">Bmp</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.gif">Gif</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jp2">Jp2</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpeg">Jpeg</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg">Jpg</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg2">Jpg2</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.png">Png</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tif">Tif</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tiff">Tiff</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.webp">Webp</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvifInput`<sup>Optional</sup> <a name="AvifInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.avifInput"></a>

```go
func AvifInput() *[]*string
```

- *Type:* *[]*string

---

##### `BmpInput`<sup>Optional</sup> <a name="BmpInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.bmpInput"></a>

```go
func BmpInput() *[]*string
```

- *Type:* *[]*string

---

##### `GifInput`<sup>Optional</sup> <a name="GifInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.gifInput"></a>

```go
func GifInput() *[]*string
```

- *Type:* *[]*string

---

##### `Jp2Input`<sup>Optional</sup> <a name="Jp2Input" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jp2Input"></a>

```go
func Jp2Input() *[]*string
```

- *Type:* *[]*string

---

##### `JpegInput`<sup>Optional</sup> <a name="JpegInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpegInput"></a>

```go
func JpegInput() *[]*string
```

- *Type:* *[]*string

---

##### `Jpg2Input`<sup>Optional</sup> <a name="Jpg2Input" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg2Input"></a>

```go
func Jpg2Input() *[]*string
```

- *Type:* *[]*string

---

##### `JpgInput`<sup>Optional</sup> <a name="JpgInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpgInput"></a>

```go
func JpgInput() *[]*string
```

- *Type:* *[]*string

---

##### `PngInput`<sup>Optional</sup> <a name="PngInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.pngInput"></a>

```go
func PngInput() *[]*string
```

- *Type:* *[]*string

---

##### `TiffInput`<sup>Optional</sup> <a name="TiffInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tiffInput"></a>

```go
func TiffInput() *[]*string
```

- *Type:* *[]*string

---

##### `TifInput`<sup>Optional</sup> <a name="TifInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tifInput"></a>

```go
func TifInput() *[]*string
```

- *Type:* *[]*string

---

##### `WebpInput`<sup>Optional</sup> <a name="WebpInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.webpInput"></a>

```go
func WebpInput() *[]*string
```

- *Type:* *[]*string

---

##### `Avif`<sup>Required</sup> <a name="Avif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.avif"></a>

```go
func Avif() *[]*string
```

- *Type:* *[]*string

---

##### `Bmp`<sup>Required</sup> <a name="Bmp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.bmp"></a>

```go
func Bmp() *[]*string
```

- *Type:* *[]*string

---

##### `Gif`<sup>Required</sup> <a name="Gif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.gif"></a>

```go
func Gif() *[]*string
```

- *Type:* *[]*string

---

##### `Jp2`<sup>Required</sup> <a name="Jp2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jp2"></a>

```go
func Jp2() *[]*string
```

- *Type:* *[]*string

---

##### `Jpeg`<sup>Required</sup> <a name="Jpeg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpeg"></a>

```go
func Jpeg() *[]*string
```

- *Type:* *[]*string

---

##### `Jpg`<sup>Required</sup> <a name="Jpg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg"></a>

```go
func Jpg() *[]*string
```

- *Type:* *[]*string

---

##### `Jpg2`<sup>Required</sup> <a name="Jpg2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.jpg2"></a>

```go
func Jpg2() *[]*string
```

- *Type:* *[]*string

---

##### `Png`<sup>Required</sup> <a name="Png" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.png"></a>

```go
func Png() *[]*string
```

- *Type:* *[]*string

---

##### `Tif`<sup>Required</sup> <a name="Tif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tif"></a>

```go
func Tif() *[]*string
```

- *Type:* *[]*string

---

##### `Tiff`<sup>Required</sup> <a name="Tiff" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.tiff"></a>

```go
func Tiff() *[]*string
```

- *Type:* *[]*string

---

##### `Webp`<sup>Required</sup> <a name="Webp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.webp"></a>

```go
func Webp() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



