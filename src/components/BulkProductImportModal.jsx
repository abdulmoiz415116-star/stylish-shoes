import React, { useState } from 'react';
import {
  X,
  Upload,
  Download,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  FileSpreadsheet,
  Table,
  ClipboardPaste,
  Sparkles,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const BulkProductImportModal = ({ isOpen, onClose, onBulkImport }) => {
  const [activeTab, setActiveTab] = useState('csv');
  const [isProcessing, setIsProcessing] = useState(false);

  const [csvFile, setCsvFile] = useState(null);
  const [parsedCsvProducts, setParsedCsvProducts] = useState([]);
  const [csvError, setCsvError] = useState('');

  const createEmptyRow = (id) => ({
    id: id || `row-${Date.now()}-${Math.random()}`,
    title: '',
    category: 'women',
    subcategory: 'Heels',
    price: '4950',
    stockCount: '20',
    colors: 'Black, Nude, Gold',
    sizes: '36, 37, 38, 39, 40',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800',
    description: ''
  });

  const [tableRows, setTableRows] = useState([
    createEmptyRow('1'),
    createEmptyRow('2'),
    createEmptyRow('3'),
    createEmptyRow('4'),
    createEmptyRow('5')
  ]);

  const [pasteText, setPasteText] = useState('');
  const [parsedPastedProducts, setParsedPastedProducts] = useState([]);

  if (!isOpen) return null;

  const handleDownloadTemplate = () => {
    const headers = [
      'Title',
      'Category',
      'Subcategory',
      'Price',
      'Stock',
      'Colors',
      'Sizes',
      'ImageURL',
      'Description'
    ];

    const sampleRows = [
      [
        '"Royal Crystal Bridal Stiletto Heels"',
        'women',
        'Heels',
        '6950',
        '25',
        '"Gold, Silver, Champagne"',
        '"36, 37, 38, 39, 40"',
        'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800',
        '"Handcrafted crystal stiletto heels with cushioned sole."'
      ],
      [
        '"Embellished Tilla Velvet Khussa"',
        'women',
        'Khussa',
        '3850',
        '30',
        '"Maroon, Emerald Green, Black"',
        '"36, 37, 38, 39, 40, 41"',
        'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&q=80&w=800',
        '"Authentic raw velvet khussa with pure tilla embroidery."'
      ],
      [
        '"Handmade Quetta Norozi Double Sole Chappal"',
        'men',
        'Peshawari',
        '5990',
        '20',
        '"Mustard Tan, Jet Black, Chocolate Brown"',
        '"39, 40, 41, 42, 43, 44"',
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800',
        '"Top-grain genuine cowhide leather with high-grade tyre sole."'
      ],
      [
        '"Luxury Quilted Crossbody Handbag"',
        'accessories',
        'Handbags',
        '4500',
        '15',
        '"Black, Tan, Maroon"',
        '"Standard"',
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800',
        '"Golden lock luxury quilted shoulder bag with detachable strap."'
      ]
    ];

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...sampleRows.map((r) => r.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'stylish_shoes_bulk_products_template.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const parseCSVString = (text) => {
    const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    if (lines.length < 2) {
      throw new Error('CSV file must have a header row and at least 1 product row.');
    }

    const parseLine = (line) => {
      const result = [];
      let cur = '';
      let inQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const c = line[i];
        if (c === '"') {
          inQuotes = !inQuotes;
        } else if (c === ',' && !inQuotes) {
          result.push(cur.trim().replace(/^"|"$/g, ''));
          cur = '';
        } else {
          cur += c;
        }
      }
      result.push(cur.trim().replace(/^"|"$/g, ''));
      return result;
    };

    const headers = parseLine(lines[0]).map((h) => h.toLowerCase().replace(/[^a-z0-9]/g, ''));
    const rows = [];

    for (let i = 1; i < lines.length; i++) {
      const parts = parseLine(lines[i]);
      if (parts.length === 0 || !parts.some(Boolean)) continue;

      const rowObj = {};
      headers.forEach((h, idx) => {
        rowObj[h] = parts[idx] || '';
      });

      const title = rowObj.title || rowObj.name || rowObj.productname || parts[0] || '';
      if (!title) continue;

      const category = (rowObj.category || rowObj.dept || parts[1] || 'women').toLowerCase().trim();
      const subcategory = rowObj.subcategory || rowObj.subcat || rowObj.type || parts[2] || 'Style';
      const price = parseFloat(rowObj.price || parts[3]) || 3500;
      const stock = parseInt(rowObj.stock || rowObj.stockcount || rowObj.qty || parts[4]) || 20;
      const colors = rowObj.colors || rowObj.color || parts[5] || 'Standard';
      const sizes = rowObj.sizes || rowObj.size || parts[6] || '37, 38, 39, 40';
      const image = rowObj.imageurl || rowObj.image || rowObj.img || parts[7] || 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800';
      const description = rowObj.description || rowObj.desc || parts[8] || `${title} - Stylish Shoes & Bags Collection.`;

      rows.push({
        title,
        category,
        subcategory,
        price,
        stockCount: stock,
        inStock: stock > 0,
        colors,
        sizes,
        image,
        secondaryImage: image,
        description,
        enabled: true,
        isNew: true
      });
    }

    return rows;
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    setCsvError('');
    if (!file) return;

    setCsvFile(file);
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const text = evt.target.result;
        const products = parseCSVString(text);
        if (products.length === 0) {
          setCsvError('No valid product rows found. Please check file format.');
          setParsedCsvProducts([]);
        } else {
          setParsedCsvProducts(products);
        }
      } catch (err) {
        setCsvError(err.message || 'Error parsing CSV file.');
        setParsedCsvProducts([]);
      }
    };
    reader.readAsText(file);
  };

  const handleTableRowChange = (id, field, value) => {
    setTableRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const handleAddRows = (count = 5) => {
    const newRows = Array.from({ length: count }, () => createEmptyRow());
    setTableRows((prev) => [...prev, ...newRows]);
  };

  const handleDeleteRow = (id) => {
    setTableRows((prev) => prev.filter((r) => r.id !== id));
  };

  const handleClearEmptyRows = () => {
    setTableRows((prev) => prev.filter((r) => r.title.trim() !== ''));
  };

  const handleParsePastedData = () => {
    if (!pasteText.trim()) {
      setParsedPastedProducts([]);
      return;
    }

    const lines = pasteText.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    const results = [];

    lines.forEach((line, idx) => {
      const separator = line.includes('\t') ? '\t' : ',';
      const parts = line.split(separator).map((s) => s.trim().replace(/^"|"$/g, ''));
      if (parts.length === 0 || !parts[0]) return;

      if (idx === 0 && (parts[0].toLowerCase().includes('title') || parts[0].toLowerCase().includes('name'))) {
        return;
      }

      const title = parts[0];
      const category = (parts[1] || 'women').toLowerCase();
      const subcategory = parts[2] || 'Style';
      const price = parseFloat(parts[3]) || 3500;
      const stock = parseInt(parts[4]) || 20;
      const colors = parts[5] || 'Standard';
      const sizes = parts[6] || '37, 38, 39, 40';
      const image = parts[7] || 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800';

      results.push({
        title,
        category,
        subcategory,
        price,
        stockCount: stock,
        inStock: stock > 0,
        colors,
        sizes,
        image,
        secondaryImage: image,
        description: `${title} - Premium Footwear Collection.`,
        enabled: true,
        isNew: true
      });
    });

    setParsedPastedProducts(results);
  };

  const handleExecuteImport = async (productsToImport) => {
    if (!productsToImport || productsToImport.length === 0) return;
    setIsProcessing(true);

    try {
      if (typeof onBulkImport === 'function') {
        await onBulkImport(productsToImport);
      }
      onClose();
    } finally {
      setIsProcessing(false);
    }
  };

  const validTableRows = tableRows.filter((r) => r.title.trim().length > 0);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 font-poppins">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-3xl max-w-5xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-gray-900 max-h-[92vh] overflow-y-auto border border-pink-100"
        >
          {/* Header */}
          <div className="flex flex-wrap justify-between items-center border-b border-gray-100 pb-4 gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-tr from-purple-600 to-pink-600 text-white rounded-2xl flex items-center justify-center shadow-md">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold text-purple-600 uppercase tracking-widest block">
                  BULK INVENTORY MASTER (بلک ایڈ)
                </span>
                <h3 className="text-xl font-black text-neutral-950 uppercase tracking-tight">
                  Bulk Product &amp; Stock Import
                </h3>
                <p className="text-xs text-gray-500 font-medium">
                  Add 10, 50, or 100+ shoes &amp; bags in one single action without manual repetition.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-400 hover:text-neutral-950 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-gray-100 pb-3">
            <button
              onClick={() => setActiveTab('csv')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'csv'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-purple-50 hover:text-purple-900'
              }`}
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>1. Excel / CSV File Upload</span>
            </button>

            <button
              onClick={() => setActiveTab('table')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'table'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-purple-50 hover:text-purple-900'
              }`}
            >
              <Table className="w-4 h-4" />
              <span>2. Multi-Row Grid Entry ({validTableRows.length} ready)</span>
            </button>

            <button
              onClick={() => setActiveTab('paste')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'paste'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-purple-50 hover:text-purple-900'
              }`}
            >
              <ClipboardPaste className="w-4 h-4" />
              <span>3. Copy-Paste from Sheets ({parsedPastedProducts.length})</span>
            </button>
          </div>

          {/* TAB 1: CSV FILE UPLOAD */}
          {activeTab === 'csv' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-2xl border border-purple-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <h4 className="text-xs font-black text-purple-950 uppercase tracking-wide">
                    Need the Excel / CSV Template?
                  </h4>
                  <p className="text-xs text-purple-800/80 mt-0.5">
                    Download our ready-made spreadsheet template with Title, Price, Stock &amp; Category columns.
                  </p>
                </div>
                <button
                  onClick={handleDownloadTemplate}
                  className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white px-4 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider shadow-sm transition-all whitespace-nowrap cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Sample CSV</span>
                </button>
              </div>

              <div className="border-2 border-dashed border-purple-200 hover:border-purple-500 transition-colors rounded-3xl p-8 text-center bg-purple-50/20 space-y-3">
                <div className="w-14 h-14 bg-white rounded-2xl mx-auto flex items-center justify-center text-purple-600 shadow-sm border border-purple-100">
                  <Upload className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-900">
                    Upload your filled Products CSV or TXT file
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Upload up to 500 products at once. Standard comma-separated values supported.
                  </p>
                </div>
                <div>
                  <label className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-purple-700 text-white text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-md cursor-pointer transition-all">
                    <span>Select File</span>
                    <input
                      type="file"
                      accept=".csv, .txt"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>
                {csvFile && (
                  <p className="text-xs font-bold text-purple-700">
                    Selected: {csvFile.name} ({(csvFile.size / 1024).toFixed(1)} KB)
                  </p>
                )}
              </div>

              {csvError && (
                <div className="bg-red-50 text-red-700 p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2 border border-red-200">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{csvError}</span>
                </div>
              )}

              {parsedCsvProducts.length > 0 && (
                <div className="space-y-3 border border-purple-100 rounded-2xl p-4 bg-white">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black text-purple-950 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>{parsedCsvProducts.length} Products Successfully Detected</span>
                    </span>
                    <button
                      onClick={() => handleExecuteImport(parsedCsvProducts)}
                      disabled={isProcessing}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider shadow-md transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>{isProcessing ? 'Importing...' : `Import All ${parsedCsvProducts.length} Products`}</span>
                    </button>
                  </div>

                  <div className="max-h-60 overflow-y-auto border border-gray-100 rounded-xl">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-gray-50 text-[10px] font-black uppercase text-gray-500 sticky top-0">
                        <tr>
                          <th className="p-2.5">#</th>
                          <th className="p-2.5">Title</th>
                          <th className="p-2.5">Category</th>
                          <th className="p-2.5">Subcat</th>
                          <th className="p-2.5">Price</th>
                          <th className="p-2.5">Stock</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 font-semibold text-gray-700">
                        {parsedCsvProducts.slice(0, 50).map((p, idx) => (
                          <tr key={idx} className="hover:bg-purple-50/50">
                            <td className="p-2.5 text-gray-400">{idx + 1}</td>
                            <td className="p-2.5 text-neutral-950 font-bold max-w-xs truncate">{p.title}</td>
                            <td className="p-2.5 uppercase text-purple-700 font-extrabold text-[10px]">{p.category}</td>
                            <td className="p-2.5">{p.subcategory}</td>
                            <td className="p-2.5 font-bold">Rs. {p.price.toLocaleString()}</td>
                            <td className="p-2.5 text-emerald-700 font-black">{p.stockCount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {parsedCsvProducts.length > 50 && (
                    <p className="text-[10px] text-gray-400 text-center">
                      ...and {parsedCsvProducts.length - 50} more products ready for batch import.
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: MULTI-ROW GRID SPREADSHEET */}
          {activeTab === 'table' && (
            <div className="space-y-4">
              <div className="flex flex-wrap justify-between items-center gap-2 bg-gray-50 p-3 rounded-2xl border border-gray-200 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-700">Quick Grid Actions:</span>
                  <button
                    onClick={() => handleAddRows(5)}
                    className="px-3 py-1.5 bg-white hover:bg-neutral-950 hover:text-white rounded-lg font-bold border border-gray-200 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>+5 Rows</span>
                  </button>
                  <button
                    onClick={() => handleAddRows(10)}
                    className="px-3 py-1.5 bg-white hover:bg-neutral-950 hover:text-white rounded-lg font-bold border border-gray-200 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>+10 Rows</span>
                  </button>
                  <button
                    onClick={handleClearEmptyRows}
                    className="px-3 py-1.5 bg-white hover:bg-red-600 hover:text-white rounded-lg font-bold border border-gray-200 transition-colors flex items-center gap-1 cursor-pointer text-red-600"
                    title="Remove rows without a title"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clean Empty Rows</span>
                  </button>
                </div>

                <button
                  onClick={() => handleExecuteImport(validTableRows)}
                  disabled={validTableRows.length === 0 || isProcessing}
                  className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{isProcessing ? 'Importing...' : `Import ${validTableRows.length} Products`}</span>
                </button>
              </div>

              <div className="max-h-[50vh] overflow-x-auto overflow-y-auto border border-gray-200 rounded-2xl">
                <table className="w-full text-left text-xs min-w-[850px]">
                  <thead className="bg-neutral-900 text-white text-[10px] font-black uppercase sticky top-0 z-10">
                    <tr>
                      <th className="p-3 w-12 text-center">#</th>
                      <th className="p-3 w-64">Product Title *</th>
                      <th className="p-3 w-32">Category *</th>
                      <th className="p-3 w-36">Subcategory *</th>
                      <th className="p-3 w-28">Price (PKR) *</th>
                      <th className="p-3 w-24">Stock *</th>
                      <th className="p-3 w-40">Colors</th>
                      <th className="p-3 w-40">Sizes</th>
                      <th className="p-3 w-12 text-center">Del</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {tableRows.map((row, idx) => (
                      <tr key={row.id} className="hover:bg-purple-50/30 transition-colors">
                        <td className="p-2 text-center text-gray-400 font-bold">{idx + 1}</td>
                        <td className="p-2">
                          <input
                            type="text"
                            placeholder="e.g. Royal Crystal Heels"
                            value={row.title}
                            onChange={(e) => handleTableRowChange(row.id, 'title', e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-lg font-bold text-gray-900 focus:bg-white focus:border-purple-600 focus:outline-none"
                          />
                        </td>
                        <td className="p-2">
                          <select
                            value={row.category}
                            onChange={(e) => handleTableRowChange(row.id, 'category', e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 px-2 py-1.5 rounded-lg font-bold text-gray-900 uppercase text-[11px] focus:bg-white"
                          >
                            <option value="women">Women</option>
                            <option value="men">Men</option>
                            <option value="accessories">Accessories</option>
                            <option value="kids">Kids</option>
                          </select>
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            placeholder="Heels / Khussa"
                            value={row.subcategory}
                            onChange={(e) => handleTableRowChange(row.id, 'subcategory', e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-lg font-medium text-gray-900 focus:bg-white focus:border-purple-600 focus:outline-none"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            placeholder="4950"
                            value={row.price}
                            onChange={(e) => handleTableRowChange(row.id, 'price', e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-lg font-bold text-gray-900 focus:bg-white focus:border-purple-600 focus:outline-none"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            placeholder="20"
                            value={row.stockCount}
                            onChange={(e) => handleTableRowChange(row.id, 'stockCount', e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-lg font-bold text-gray-900 focus:bg-white focus:border-purple-600 focus:outline-none"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            placeholder="Black, Gold"
                            value={row.colors}
                            onChange={(e) => handleTableRowChange(row.id, 'colors', e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-lg text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            placeholder="37, 38, 39"
                            value={row.sizes}
                            onChange={(e) => handleTableRowChange(row.id, 'sizes', e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-lg text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                          />
                        </td>
                        <td className="p-2 text-center">
                          <button
                            onClick={() => handleDeleteRow(row.id)}
                            className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                            title="Delete Row"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: COPY-PASTE FROM EXCEL OR GOOGLE SHEETS */}
          {activeTab === 'paste' && (
            <div className="space-y-4">
              <div className="bg-purple-50/70 p-4 rounded-2xl border border-purple-100 text-xs text-purple-950 space-y-1">
                <strong>📋 How to paste from Excel / Google Sheets:</strong>
                <p className="text-purple-800">
                  Select your product rows in Excel (Columns: <em>Title, Category, Subcategory, Price, Stock, Colors, Sizes, ImageURL</em>) &bull; Press <strong>Ctrl + C</strong> &bull; Paste inside the box below!
                </p>
              </div>

              <textarea
                rows={7}
                placeholder="Paste tab-separated rows here directly from Excel or Google Sheets..."
                value={pasteText}
                onChange={(e) => setPasteText(e.target.value)}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-xs font-mono text-gray-900 focus:bg-white focus:border-purple-600 focus:outline-none"
              />

              <div className="flex justify-between items-center">
                <button
                  onClick={handleParsePastedData}
                  className="bg-neutral-950 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                >
                  ⚡ Preview &amp; Parse Pasted Data
                </button>

                {parsedPastedProducts.length > 0 && (
                  <button
                    onClick={() => handleExecuteImport(parsedPastedProducts)}
                    disabled={isProcessing}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{isProcessing ? 'Importing...' : `Import ${parsedPastedProducts.length} Products`}</span>
                  </button>
                )}
              </div>

              {parsedPastedProducts.length > 0 && (
                <div className="border border-purple-100 rounded-2xl p-4 bg-white space-y-2">
                  <span className="text-xs font-black text-purple-950 uppercase tracking-wider">
                    ✅ {parsedPastedProducts.length} Products Detected From Clipboard:
                  </span>
                  <div className="max-h-48 overflow-y-auto border border-gray-100 rounded-xl">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-gray-50 text-[10px] font-black uppercase text-gray-500 sticky top-0">
                        <tr>
                          <th className="p-2">#</th>
                          <th className="p-2">Title</th>
                          <th className="p-2">Category</th>
                          <th className="p-2">Price</th>
                          <th className="p-2">Stock</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 font-semibold text-gray-700">
                        {parsedPastedProducts.map((p, idx) => (
                          <tr key={idx}>
                            <td className="p-2 text-gray-400">{idx + 1}</td>
                            <td className="p-2 text-neutral-950 font-bold">{p.title}</td>
                            <td className="p-2 uppercase text-purple-700 text-[10px] font-black">{p.category}</td>
                            <td className="p-2 font-bold">Rs. {p.price.toLocaleString()}</td>
                            <td className="p-2 text-emerald-700 font-black">{p.stockCount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Footer Close */}
          <div className="flex justify-end pt-3 border-t border-gray-100">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-bold text-gray-600 hover:text-neutral-950 uppercase tracking-wider cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
